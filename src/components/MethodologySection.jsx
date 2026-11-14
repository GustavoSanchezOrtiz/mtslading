import React from 'react';
import { METHODOLOGY_STEPS } from '../data/mtsContent';

export function MethodologySection() {
  return (
    <section id="proceso" className="py-16 sm:py-20 border-b border-zinc-800/80 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <span className="w-2 h-px bg-[#e0bc34]" />
            <span>Metodología de Ejecución</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
            Del levantamiento en sitio al cierre administrativo sin vacíos
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Cada trabajo se documenta por cliente, planta y número de presupuesto para garantizar
            claridad técnica y financiera de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {METHODOLOGY_STEPS.map((item) => (
            <div
              key={item.step}
              className="mts-surface mts-bracket-box rounded-2xl p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/25 text-xs font-mono font-bold text-amber-300">
                    PASO {item.step}
                  </span>
                  <span className="w-6 h-px bg-zinc-800" aria-hidden="true" />
                </div>
                <h3 className="text-base font-heading font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-300">
                {item.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;
