import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoMts from '../assets/logo.svg';
import { MTS_BRAND, NAV_LINKS } from '../data/mtsContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <img
              src={logoMts}
              alt="MTS Ingeniería Industrial"
              className="h-8 w-auto object-contain select-none"
            />
            <div className="border-l border-zinc-800 pl-3.5">
              <p className="text-sm font-heading font-semibold text-white">
                {MTS_BRAND.fullName}
              </p>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                {MTS_BRAND.location} &middot; {MTS_BRAND.email}
              </p>
            </div>
          </div>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-4 text-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={MTS_BRAND.adminPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-200 hover:text-amber-400 font-medium transition-colors"
            >
              <span>Portal Administrativo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500 font-poppins">
          <span>
            &copy; {year} {MTS_BRAND.legalName} &middot; Todos los derechos reservados.
          </span>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={MTS_BRAND.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-400 underline-offset-4 hover:underline transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href={MTS_BRAND.termsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-400 underline-offset-4 hover:underline transition-colors"
            >
              Condiciones del servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
