import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CaseStudiesPage,
  ContactPage,
  FaqPage,
  FloridaPage,
  GalleryPage,
  HomePage,
  LocationsPage,
  MaintenanceProgramsPage,
  MarketsPage,
  NotFoundPage,
  ServicesPage,
  TechnologyPage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/maintenance" element={<MaintenanceProgramsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/florida-cart-path-cleaning" element={<FloridaPage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
