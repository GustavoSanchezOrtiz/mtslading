import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileText,
  Layers,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import logoMts from '../assets/logo.svg';
import logoNegro from '../assets/logoNegro.svg';
import decoratorSvg from '../assets/DecoradorSuperIzquierdo.svg';
import { HERO_PILLARS, MTS_BRAND } from '../data/mtsContent';

const TABS = [
  { id: 'membrete', label: 'Membrete PDF', icon: FileText },
  { id: 'control', label: 'Control de Obra', icon: Layers },
  { id: 'sistema', label: 'Ecosistema', icon: Cpu },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('membrete');

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
              desarrollamos proyectos de maquinado CNC, mantenimiento mayor en planta, pailería y
              automatización con respaldo técnico, presupuestos por partidas y control presupuestal
              documentado.
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

          {/* Columna derecha: Visor técnico interactivo MTS */}
          <div className="lg:col-span-6">
            <div className="mts-surface mts-bracket-box rounded-2xl p-4 sm:p-5 space-y-4">
              {/* Barra superior del panel técnico */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-[#e0bc34]" />
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold text-white">
                      Estándar Técnico y Documental MTS
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
                  className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex p-1 rounded-xl bg-zinc-950 border border-zinc-800/80 gap-1"
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
                        className={`inline-flex items-center justify-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#66530F] text-white font-semibold border border-[#a38418]/60'
                            : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                        }`}
                      >
                        <Icon className="w-3 h-3 shrink-0" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contenido de la pestaña activa */}
              {activeTab === 'membrete' && (
                <div className="animate-content-fade space-y-2.5">
                  <div className="letterhead-sheet border border-zinc-700/70 shadow-2xl">
                    {/* Marca de agua oficial */}
                    <div
                      className="absolute pointer-events-none select-none"
                      style={{
                        top: '28%',
                        left: '12%',
                        width: '76%',
                        opacity: 0.08,
                        zIndex: 0,
                      }}
                    >
                      <img src={logoNegro} alt="" aria-hidden="true" className="w-full h-auto block" />
                    </div>

                    {/* Barra carbón oficial #262626 */}
                    <div
                      className="absolute left-0 right-0 flex items-center"
                      style={{
                        top: '3.7cqw',
                        height: '12.74cqw',
                        backgroundColor: '#262626',
                        zIndex: 1,
                        paddingLeft: '33.8cqw',
                        paddingRight: '2.5cqw',
                      }}
                    >
                      <div className="text-[clamp(7px,1.35cqw,11px)] leading-[1.35] text-[#f7fafc] w-full min-w-0 font-sans">
                        <div className="truncate font-semibold text-white">
                          MTS Sistemas e Ingeniería Industrial
                        </div>
                        <div className="truncate text-zinc-200">
                          Durango, Durango. México
                        </div>
                        <div className="truncate">
                          <span className="font-bold text-white">Correo:</span> {MTS_BRAND.email}
                        </div>
                        <div className="truncate text-zinc-300">
                          <span className="font-bold text-white">Web:</span> {MTS_BRAND.landingDomain}
                        </div>
                      </div>
                    </div>

                    {/* Decorador geométrico oficial */}
                    <div
                      className="absolute top-0 left-0 pointer-events-none"
                      style={{ width: '31.5cqw', zIndex: 2 }}
                    >
                      <img src={decoratorSvg} alt="" aria-hidden="true" className="w-full h-auto block" />
                    </div>

                    {/* Logo sobre el recuadro negro */}
                    <div
                      className="absolute top-0 left-0 flex items-center justify-center pointer-events-none"
                      style={{ width: '31.5cqw', height: '20.15cqw', zIndex: 3 }}
                    >
                      <img
                        src={logoMts}
                        alt="Logo MTS en membrete oficial"
                        style={{ width: '27.8cqw', height: 'auto', display: 'block' }}
                      />
                    </div>

                    {/* Cuerpo del documento */}
                    <div
                      className="relative font-sans"
                      style={{
                        zIndex: 1,
                        paddingTop: '22cqw',
                        paddingLeft: '9.5cqw',
                        paddingRight: '6.5cqw',
                        paddingBottom: '3.5cqw',
                      }}
                    >
                      <div className="flex justify-between items-start gap-2 mb-[1.6cqw]">
                        <div className="letterhead-client-box flex-[0_0_54%] p-[1cqw_1.4cqw] text-[clamp(6.8px,1.2cqw,10px)] leading-[1.28] text-[#1a202c]">
                          <div className="font-bold text-[clamp(7.2px,1.35cqw,10.5px)] text-[#1a202c] mb-[0.2cqw]">
                            Cliente:
                          </div>
                          <div className="font-semibold text-[clamp(7px,1.25cqw,10px)] text-[#1a202c] truncate">
                            Sector Industrial &amp; Manufactura
                          </div>
                          <div className="text-[#4a5568] truncate">
                            Planta Industrial &middot; Área de Mantenimiento
                          </div>
                          <div className="text-[#4a5568] truncate">
                            <strong className="text-[#1a202c] font-semibold">Atención:</strong>{' '}
                            Ingeniería / Compras
                          </div>
                        </div>

                        <div className="flex-[0_0_43%] text-right pt-[0.2cqw]">
                          <div className="font-extrabold text-[clamp(7.2px,1.65cqw,14px)] text-[#1a202c] leading-tight whitespace-nowrap">
                            Presupuesto N: MTS-2026-084
                          </div>
                          <div className="font-medium text-[clamp(6.8px,1.2cqw,10px)] text-[#4a5568] mt-[0.25cqw]">
                            Cotización técnica formal
                          </div>
                        </div>
                      </div>

                      <div className="text-[clamp(7.2px,1.3cqw,10.5px)] text-[#1a202c] mb-[1.2cqw]">
                        <strong className="font-extrabold">Proyecto:</strong>{' '}
                        <span className="font-semibold text-[#2d3748]">
                          Maquinado y mantenimiento a flecha de transmisión
                        </span>
                      </div>

                      <table className="w-full border-collapse mb-[1.2cqw] text-[clamp(6.6px,1.15cqw,9.5px)]">
                        <thead>
                          <tr className="bg-[#262626] text-white font-bold">
                            <th className="w-[14%] text-center py-[0.65cqw] px-[0.4cqw]">Cant.</th>
                            <th className="w-[54%] text-center py-[0.65cqw] px-[0.4cqw]">
                              Descripción técnica
                            </th>
                            <th className="w-[16%] text-center py-[0.65cqw] px-[0.4cqw]">Unidad</th>
                            <th className="w-[16%] text-center py-[0.65cqw] px-[0.4cqw]">Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[#cbd5e0] text-[#1a202c] bg-white/70">
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-x border-[#cbd5e0] font-semibold">
                              01
                            </td>
                            <td className="py-[0.7cqw] px-[0.7cqw] border-r border-[#cbd5e0]">
                              <div className="font-semibold text-[#1a202c] leading-tight">
                                Maquinado CNC y rectificado en flecha
                              </div>
                              <div className="italic text-[#4a5568] text-[clamp(6px,1.02cqw,8.5px)] mt-[0.1cqw]">
                                Acero aleado 4140 templado por inducción
                              </div>
                            </td>
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-r border-[#cbd5e0] font-medium">
                              Pza
                            </td>
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-r border-[#cbd5e0] font-semibold text-[#66530F]">
                              Partida
                            </td>
                          </tr>
                          <tr className="border-b border-[#cbd5e0] text-[#1a202c] bg-white/70">
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-x border-[#cbd5e0] font-semibold">
                              02
                            </td>
                            <td className="py-[0.7cqw] px-[0.7cqw] border-r border-[#cbd5e0]">
                              <div className="font-semibold text-[#1a202c] leading-tight">
                                Alineación, ajuste y montaje en planta
                              </div>
                              <div className="italic text-[#4a5568] text-[clamp(6px,1.02cqw,8.5px)] mt-[0.1cqw]">
                                Validación dimensional y prueba de arranque
                              </div>
                            </td>
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-r border-[#cbd5e0] font-medium">
                              Serv
                            </td>
                            <td className="text-center py-[0.7cqw] px-[0.4cqw] border-r border-[#cbd5e0] font-semibold text-[#66530F]">
                              Partida
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="flex items-center justify-between text-[clamp(6px,1.02cqw,8.5px)] text-[#4a5568] border-t border-zinc-300 pt-[0.7cqw]">
                        <span>
                          <strong className="text-[#1a202c]">Formato oficial:</strong> Emisión PDF con
                          folio único
                        </span>
                        <span className="font-semibold text-[#1a202c]">
                          IVA se adiciona al facturar
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                    <span>Representación fiel del membrete corporativo MTS</span>
                    <span className="text-amber-400">Documento PDF &middot; Folio Único</span>
                  </p>
                </div>
              )}

              {activeTab === 'control' && (
                <div className="animate-content-fade space-y-3 py-1">
                  {[
                    {
                      code: 'FASE 01',
                      title: 'Levantamiento y definición de partidas',
                      desc: 'Identificación de planta, sucursal, contacto técnico y catálogo de conceptos unitarios.',
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
                      className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/85 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-semibold text-amber-400">
                            {item.code}
                          </span>
                          <h3 className="text-xs sm:text-sm font-heading font-semibold text-white truncate">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                        {item.badge}
                      </span>
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
                            Plataforma PWA de cotizaciones, clientes, plantas y gastos
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
                            Servicio central con OAuth 2.0, JWT y generación oficial PDF
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
