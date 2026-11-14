import React, { useState, useEffect } from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  const getInitialRoute = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (target) => {
    if (target === 'contato') {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (target === 'home#servicos') {
      window.location.hash = 'home';
      setCurrentRoute('home');
      setTimeout(() => {
        document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }

    window.location.hash = target;
    setCurrentRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentRoute === 'quem-sou-eu') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentRoute.startsWith('servico/')) {
      const slug = currentRoute.replace('servico/', '');
      return <ServiceDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-[#E5E7EB] relative selection:bg-[#2563EB] selection:text-white">
      {/* Interactive 3D Animated Canvas Background */}
      <Background3D />

      {/* Top Sticky Glass Header */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Animated Page Transition Container */}
      <main key={currentRoute} className="flex-1 animate-page-enter">
        {renderPage()}
      </main>

      {/* Footer signed by Erick Bittencourt */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp CTA Button */}
      <WhatsAppFloat />
    </div>
  );
}
