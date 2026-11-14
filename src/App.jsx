import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import MethodologySection from './components/MethodologySection';
import PlatformSection from './components/PlatformSection';
import SectorsAndContactSection from './components/SectorsAndContactSection';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans antialiased selection:bg-[#66530F] selection:text-white">
      {/* Enlace de accesibilidad para lectores de pantalla y teclado */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-amber-400 focus:text-zinc-950 focus:font-semibold focus:text-xs focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido-principal" className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <MethodologySection />
        <PlatformSection />
        <SectorsAndContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
