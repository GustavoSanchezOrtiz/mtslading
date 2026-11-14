import React from 'react';
import {
  FolderKanban,
  Factory,
  Cpu,
  PackageCheck,
} from 'lucide-react';
import { CAPABILITIES } from '../data/mtsContent';

const ICONS = [FolderKanban, Factory, Cpu, PackageCheck];

export function CapabilitiesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Encabezado de sección */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-zinc-800/70 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <span className="w-2 h-px bg-[#e0bc34]" />
              <span>Capacidades Técnicas</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
              Soluciones de ingeniería industrial diseñadas para responder en planta
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Integramos gestión de proyectos, intervención operativa en sitio y control electrónico
            bajo una misma estructura.
          </p>
        </div>

        {/* Grid sobrio 2x2 de capacidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <article
                key={cap.code}
                className="mts-surface rounded-2xl p-6 flex flex-col justify-between gap-5 transition-colors duration-150 hover:border-zinc-700 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-400/40 flex items-center justify-center text-zinc-200 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                        {cap.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {cap.code}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-white leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <ul className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {cap.specs.map((spec) => (
                    <li
                      key={spec}
                      className="px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800/90 text-[11px] font-mono text-zinc-300"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
