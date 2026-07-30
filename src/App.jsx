import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Payment from './pages/Payment';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBookingData, setSelectedBookingData] = useState(null);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'appointment':
        return <Appointment setActiveTab={setActiveTab} setSelectedBookingData={setSelectedBookingData} />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'team':
        return <Team />;
      case 'payment':
        return <Payment selectedBookingData={selectedBookingData} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-industrial-pattern">
      {/* Top Navbar Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Flagship Feature: Sticky Mobile Action Bar (One-Tap Call & Directions) */}
      <MobileActionBar />
    </div>
  );
}
