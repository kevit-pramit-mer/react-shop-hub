import React, { useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import CookieConsent from './components/common/CookieConsent';
import AppRoutes from './routes/AppRoutes';
import { ModalProvider } from './contexts/ModalContext';
import SkipToContent from './components/accessibility/SkipToContent';
import AccessibilityWidget from './components/accessibility/AccessibilityWidget';

function App() {
  // Detect keyboard vs mouse navigation
  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.remove('mouse-user');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.add('mouse-user');
    };

    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <ModalProvider>
      <div className="flex flex-col min-h-screen">
        <SkipToContent />
        <ScrollToTop />
        <Navbar />
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <AppRoutes />
        </main>
        <Footer />
        <CookieConsent />
        <AccessibilityWidget />
      </div>
    </ModalProvider>
  );
}

export default App;
