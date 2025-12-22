import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Calendar, MessageSquare, Phone } from 'lucide-react';
import SchedulingForm, { ScheduleData } from './SchedulingForm';
import CallBackForm, { CallBackData } from './CallBackForm';

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || 'ws://localhost:3001';

interface Message {
  id: string;
  type: 'visitor' | 'bot' | 'admin' | 'system';
  content: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);

  // Auto-set hasProvidedInfo when both name and valid email are filled (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visitorEmail.trim());
      if (visitorName.trim() && isValidEmail && !hasProvidedInfo) {
        setHasProvidedInfo(true);
      }
    }, 800); // Wait 800ms after user stops typing

    return () => clearTimeout(timer);
  }, [visitorName, visitorEmail, hasProvidedInfo]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [showScheduling, setShowScheduling] = useState(false);
  const [showCallBack, setShowCallBack] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState<string | null>(null);
  const [afterHoursMessage, setAfterHoursMessage] = useState<string | null>(null);
  
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isConnected) {
      connectWebSocket();
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const connectWebSocket = () => {
    const wsUrl = CHAT_API_URL.replace('https://', 'wss://').replace('http://', 'ws://');
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      setIsConnected(true);
      console.log('Connected to chat server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'system') {
        setConversationId(data.visitorId);
        addMessage('system', 'Hi! How can I help you with cart path cleaning today?');
      } else if (data.type === 'bot' || data.type === 'admin') {
        addMessage(data.type, data.content);
        if (data.conversationId) {
          setConversationId(data.conversationId);
        }
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('Disconnected from chat server');
    };

    wsRef.current = ws;
  };

  const addMessage = (type: Message['type'], content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    if (!hasProvidedInfo) {
      if (!visitorName || !visitorEmail) {
        alert('Please provide your name and email to start chatting');
        return;
      }
      setHasProvidedInfo(true);
    }

    addMessage('visitor', inputValue);

    wsRef.current.send(JSON.stringify({
      type: 'chat',
      content: inputValue,
      visitorName,
      visitorEmail,
      conversationId,
    }));

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleScheduleVisit = (scheduleData: ScheduleData) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    wsRef.current.send(JSON.stringify({
      type: 'schedule_visit',
      content: scheduleData,
      visitorName,
      visitorEmail,
      conversationId,
    }));

    setShowScheduling(false);
    addMessage('visitor', `Requesting on-site visit for ${scheduleData.preferredDate}`);
  };

  const handleCallBack = (callBackData: CallBackData) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    wsRef.current.send(JSON.stringify({
      type: 'request_callback',
      content: callBackData,
      visitorName,
      visitorEmail,
      conversationId,
    }));

    setShowCallBack(false);
    addMessage('visitor', `Requesting call back at ${callBackData.visitorPhone}`);
  };

  const fetchWhatsAppLink = async () => {
    try {
      const apiUrl = CHAT_API_URL.replace('ws://', 'http://').replace('wss://', 'https://');
      const response = await fetch(`${apiUrl}/api/whatsapp-link`);
      const data = await response.json();
      if (data.enabled && data.whatsappLink) {
        setWhatsappLink(data.whatsappLink);
      }
    } catch (error) {
      console.error('Failed to fetch WhatsApp link:', error);
    }
  };

  const fetchBusinessHours = async () => {
    try {
      const apiUrl = CHAT_API_URL.replace('ws://', 'http://').replace('wss://', 'https://');
      const response = await fetch(`${apiUrl}/api/business-hours`);
      const data = await response.json();
      if (!data.inBusinessHours && data.afterHoursMessage) {
        setAfterHoursMessage(data.afterHoursMessage);
      }
    } catch (error) {
      console.error('Failed to fetch business hours:', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchWhatsAppLink();
      fetchBusinessHours();
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-emerald-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Cart Path Cleaning</h3>
          <p className="text-sm text-emerald-100">
            {isConnected ? 'Online' : 'Connecting...'}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-emerald-700 p-1 rounded transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </button>
      </div>

      {/* After Hours Message */}
      {afterHoursMessage && (
        <div className="px-4 py-3 bg-amber-50 border-b border-amber-200">
          <p className="text-sm text-amber-800">{afterHoursMessage}</p>
        </div>
      )}

      {/* Action Buttons */}
      {hasProvidedInfo && !showScheduling && !showCallBack && (
        <div className="px-4 py-3 bg-white border-b border-gray-200 flex gap-2">
          <button
            onClick={() => setShowScheduling(true)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium"
          >
            <Calendar size={16} />
            Schedule Visit
          </button>
          <button
            onClick={() => setShowCallBack(true)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
          >
            <Phone size={16} />
            Request Call
          </button>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
            >
              <MessageSquare size={16} />
              WhatsApp
            </a>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        <div className="bg-white p-4 rounded-lg shadow-sm space-y-3 sticky top-0 z-10">
          <p className="text-sm text-gray-700 font-medium">
            {hasProvidedInfo ? 'Your Details:' : 'Welcome! Please provide your details to start chatting:'}
          </p>
          <input
            type="text"
            placeholder="Your name"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={hasProvidedInfo}
          />
          <input
            type="email"
            placeholder="Your email"
            value={visitorEmail}
            onChange={(e) => setVisitorEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={hasProvidedInfo}
          />
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'visitor' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.type === 'visitor'
                  ? 'bg-emerald-600 text-white'
                  : message.type === 'system'
                  ? 'bg-gray-200 text-gray-700 text-sm italic'
                  : 'bg-white text-gray-800 shadow-sm'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            disabled={!isConnected}
          />
          <button
            onClick={handleSendMessage}
            disabled={!isConnected || !inputValue.trim()}
            className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Scheduling Form Modal */}
      {showScheduling && (
        <SchedulingForm
          onSchedule={handleScheduleVisit}
          onCancel={() => setShowScheduling(false)}
          visitorName={visitorName}
          visitorEmail={visitorEmail}
        />
      )}

      {/* Call Back Form Modal */}
      {showCallBack && (
        <CallBackForm
          onSubmit={handleCallBack}
          onClose={() => setShowCallBack(false)}
          visitorName={visitorName}
        />
      )}
    </div>
  );
}
