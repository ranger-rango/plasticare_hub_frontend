import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PatientCare from './pages/patient-care';
import ProceduresPage from './pages/procedures';
import SurgeonsPage from './pages/surgeons';
import PatientGallery from './pages/patient-gallery';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="/patient-care" element={<PatientCare />} />
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="/surgeons" element={<SurgeonsPage />} />
        <Route path="/patient-gallery" element={<PatientGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
