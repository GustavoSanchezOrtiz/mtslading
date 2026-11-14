import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import logoMts from '../assets/logo.svg';
import { MTS_BRAND, NAV_LINKS } from '../data/mtsContent';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 h-16 backdrop-blur-2xl backdrop-saturate-150 bg-zinc-900/80 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Marca MTS */}
        <a
          href="#inicio"
          className="flex items-center gap-3 shrink-0 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A38418]"
          aria-label="Inicio MTS Ingeniería Industrial"
        >
          <img
            src={logoMts}
            alt="MTS Sistemas e Ingeniería Industrial"
            className="h-8 sm:h-9 w-auto object-contain select-none"
          />
          <div className="hidden sm:flex flex-col border-l border-zinc-800 pl-3 leading-none">
            <span className="text-xs font-heading font-semibold text-zinc-100 tracking-tight">
              MTS Ingeniería Industrial
            </span>
            <span className="text-[10px] font-mono text-zinc-400 mt-1">
              Sistemas &middot; Durango, MX
            </span>
          </div>
        </a>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center p-1 bg-zinc-950/75 border border-zinc-800/80 rounded-xl gap-0.5"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A38418]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Acciones de escritorio */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={MTS_BRAND.adminPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A38418]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Plataforma</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          </a>

          <a
            href="#contacto"
            className="btn-mts-primary inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-semibold"
          >
            Solicitar cotización
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-800/75 border border-white/10 text-zinc-100 text-xs font-mono hover:bg-zinc-700/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 cursor-pointer"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>{mobileOpen ? 'Cerrar' : 'Menú'}</span>
        </button>
      </div>

      {/* Panel lateral móvil */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil MTS"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800/80 p-5 flex flex-col justify-between overflow-y-auto animate-content-fade"
        >
          <div className="space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-2 pb-1">
              Navegación
            </p>
            {NAV_LINKS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-[#101012] border border-zinc-800/80 text-sm font-heading font-semibold text-zinc-100 hover:border-amber-400/40 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-amber-400">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 space-y-3">
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="btn-mts-primary w-full h-11 rounded-xl text-sm font-semibold flex items-center justify-center"
            >
              Solicitar cotización técnica
            </a>
            <a
              href={MTS_BRAND.adminPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Abrir MTS Plataforma</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
