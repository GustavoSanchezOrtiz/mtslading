import React from 'react';
import {
  ArrowUpRight,
  FileText,
  Layers,
  Lock,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { MTS_BRAND, PLATFORM_MODULES } from '../data/mtsContent';

export function PlatformSection() {
  return (
    <section id="plataforma" className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Izquierda: Descripción del ecosistema operativo */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <span className="w-2 h-px bg-[#e0bc34]" />
              <span>MTS Plataforma Digital</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
              Operación respaldada por control administrativo propio
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              A diferencia de un taller convencional, nuestra gestión técnica se apoya en{' '}
              <strong className="text-white font-semibold">MTS Plataforma</strong> (
              <code className="text-xs font-mono text-amber-300 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                administracion.ingenieriamts.com
              </code>
              ), donde estructuramos cotizaciones, partidas unitarias, clientes, plantas y gastos
              reales de obra con seguridad empresarial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {PLATFORM_MODULES.map((mod) => (
                <div
                  key={mod.key}
                  className="p-3.5 rounded-xl bg-[#101012] border border-zinc-800/80 space-y-1"
                >
                  <h3 className="text-xs font-heading font-semibold text-white">{mod.key}</h3>
                  <p className="text-xs text-zinc-400 leading-snug">{mod.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={MTS_BRAND.adminPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mts-primary h-10 px-4 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Ingresar a MTS Plataforma</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <Lock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Acceso exclusivo mediante Google OAuth 2.0</span>
              </span>
            </div>
          </div>

          {/* Derecha: Vista fiel del tablero operativo MTS */}
          <div className="lg:col-span-7">
            <div className="mts-surface rounded-2xl p-4 sm:p-6 space-y-4">
              {/* Header simulado del módulo */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-semibold text-white">
                      Pulso Comercial y Control de Obra
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400">
                      Flujo de presupuestos, partidas y erogaciones
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                  Control de Acceso &middot; Sesión Segura
                </span>
              </div>

              {/* Resumen de estados fiel al diseño de DashboardPage.jsx */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    BORRADOR
                  </span>
                  <p className="text-xs text-zinc-400">Levantamiento técnico</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800/70 text-zinc-200 border border-zinc-700/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    ENVIADA
                  </span>
                  <p className="text-xs text-zinc-400">PDF oficial emitido</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-400/10 text-amber-400 border border-amber-400/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    ACEPTADA
                  </span>
                  <p className="text-xs text-zinc-400">Proyecto en ejecución</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/90 space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    PAGADA
                  </span>
                  <p className="text-xs text-zinc-400">Cierre liquidado</p>
                </div>
              </div>

              {/* Registros representativos */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-800/90 divide-y divide-zinc-800/80">
                <div className="p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700/70 text-[11px] font-mono font-semibold text-zinc-200">
                        MTS-2026-084
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-400/10 text-amber-400 border border-amber-400/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        ACEPTADA
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 truncate">
                      Maquinado y mantenimiento a flecha de transmisión &middot; Acero 4140
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 shrink-0">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Partidas</span>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700/70 text-[11px] font-mono font-semibold text-zinc-200">
                        MTS-2026-079
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        PAGADA
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 truncate">
                      Adecuación de tablero de control y protecciones en línea de proceso
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 shrink-0">
                    <Wallet className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Auditado</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-mono text-zinc-500">
                <span>Infraestructura TLS 1.3 &middot; PWA Instalable</span>
                <span className="text-zinc-300">api.ingenieriamts.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformSection;
