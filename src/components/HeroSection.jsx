import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FolderKanban,
  ShieldCheck,
} from 'lucide-react';
import logoMts from '../assets/logo.svg';
import { HERO_PILLARS, MTS_BRAND } from '../data/mtsContent';

const TABS = [
  { id: 'control', label: 'Control de Proyectos', icon: FolderKanban },
  { id: 'sistema', label: 'Ecosistema', icon: Cpu },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('control');

  return (
    <section
      id="inicio"
      className="relative mts-cad-grid border-b border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna izquierda: Propuesta de valor */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg sm:rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[11px] sm:text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e0bc34] shrink-0" />
              <span>DURANGO, MÉXICO &middot; INGENIERÍA Y SISTEMAS INDUSTRIALES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-heading font-bold tracking-tight text-white leading-[1.12]">
              Ingeniería industrial de precisión para la continuidad de tu planta.
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              En <strong className="text-white font-semibold">MTS Sistemas e Ingeniería Industrial</strong>{' '}
              desarrollamos proyectos industriales, mantenimiento mayor en planta, automatización y
              suministro técnico con respaldo operativo, presupuestos por proyecto y control
              presupuestal documentado.
            </p>

            {/* Acciones principales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#contacto"
                className="btn-mts-primary h-11 px-5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <span>Solicitar cotización técnica</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={MTS_BRAND.adminPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-100 text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Acceso Plataforma MTS</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Pilares técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80">
              {HERO_PILLARS.map((pillar) => (
                <div
                  key={pillar.code}
                  className="p-3 rounded-xl bg-[#101012] border border-zinc-800/80 space-y-1"
                >
                  <span className="text-[11px] font-mono font-semibold text-amber-400 block">
                    {pillar.code}
                  </span>
                  <p className="text-xs text-zinc-300 leading-snug">{pillar.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Panel Técnico MTS */}
          <div className="lg:col-span-6">
            <div className="mts-surface mts-bracket-box rounded-2xl p-4 sm:p-5 space-y-4">
              {/* Barra superior del panel técnico */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <img
                      src={logoMts}
                      alt="MTS"
                      className="h-5 w-auto object-contain select-none"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold text-white">
                      Estándar Técnico y Operativo MTS
                    </p>
                    <p className="text-[11px] font-mono text-zinc-400">
                      Trazabilidad desde el presupuesto hasta la entrega
                    </p>
                  </div>
                </div>

                {/* Selector de pestañas */}
                <div
                  role="tablist"
                  aria-label="Vistas técnicas de MTS"
                  className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex p-1 rounded-xl bg-zinc-950 border border-zinc-800/80 gap-1"
                >
                  {TABS.map(({ id, label, icon: Icon }) => {
                    const isActive = activeTab === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(id)}
                        className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#66530F] text-white font-semibold border border-[#a38418]/60'
                            : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contenido de la pestaña activa */}
              {activeTab === 'control' && (
                <div className="animate-content-fade space-y-3 py-1">
                  {[
                    {
                      code: 'FASE 01',
                      title: 'Levantamiento y definición de proyectos',
                      desc: 'Identificación de planta, sucursal, contacto técnico y alcance completo del proyecto.',
                      badge: 'Alcance claro',
                    },
                    {
                      code: 'FASE 02',
                      title: 'Emisión y aprobación de presupuesto',
                      desc: 'Cotización formal numerada en estados Borrador, Enviada, Aceptada y Pagada.',
                      badge: 'Folio único',
                    },
                    {
                      code: 'FASE 03',
                      title: 'Asignación operativa y gastos reales',
                      desc: 'Control directo de compras, materiales y erogaciones reales vinculadas al proyecto.',
                      badge: 'Control real',
                    },
                    {
                      code: 'FASE 04',
                      title: 'Entrega técnica y cierre financiero',
                      desc: 'Validación en planta y conciliación exacta entre presupuesto autorizado y ejecutado.',
                      badge: 'Trazable',
                    },
                  ].map((item) => (
                    <div
                      key={item.code}
                      className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/85 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-semibold text-amber-400 whitespace-nowrap">
                          {item.code}
                        </span>
                        <span className="shrink-0 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-heading font-semibold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'sistema' && (
                <div className="animate-content-fade space-y-3 py-1">
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/85 space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
                      <span className="text-xs font-heading font-semibold text-white">
                        Arquitectura Digital MTS
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Operación Activa</span>
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#101012] border border-zinc-800 flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-amber-400 font-semibold">
                            {MTS_BRAND.landingDomain}
                          </p>
                          <p className="text-zinc-400 mt-0.5">
                            Sitio corporativo, capacidades técnicas y contacto
                          </p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>

                      <div className="p-3 rounded-lg bg-[#101012] border border-zinc-800 flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-zinc-100 font-semibold">
                            administracion.ingenieriamts.com
                          </p>
                          <p className="text-zinc-400 mt-0.5">
                            Plataforma PWA de cotizaciones, proyectos, plantas y gastos
                          </p>
                        </div>
                        <a
                          href={MTS_BRAND.adminPortalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-mono text-[11px] shrink-0"
                        >
                          <span>Abrir</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <div className="p-3 rounded-lg bg-[#101012] border border-zinc-800 flex items-center justify-between gap-3">
                        <div>
                          <p className="font-mono text-zinc-100 font-semibold">
                            api.ingenieriamts.com
                          </p>
                          <p className="text-zinc-400 mt-0.5">
                            Servicio central con Google OAuth 2.0, JWT y control operativo
                          </p>
                        </div>
                        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
