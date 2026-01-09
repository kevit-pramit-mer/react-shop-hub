import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import CookieConsent from './components/common/CookieConsent';
import AppRoutes from './routes/AppRoutes';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ModalProvider>
  );
}

export default App;
