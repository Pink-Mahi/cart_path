import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-emerald-600'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'es'
            ? 'bg-white text-emerald-600'
            : 'text-white hover:bg-white/10'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
