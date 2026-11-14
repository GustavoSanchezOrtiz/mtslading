import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Mail,
  MapPin,
  Send,
  AlertCircle,
  Building2,
} from 'lucide-react';
import { MTS_BRAND, SECTORS, SERVICE_OPTIONS } from '../data/mtsContent';

const INITIAL_FORM = {
  nombre: '',
  empresa: '',
  correo: '',
  servicio: SERVICE_OPTIONS[0],
  detalles: '',
};

export function SectorsAndContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [formError, setFormError] = useState(null);
  const [preparedSummary, setPreparedSummary] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MTS_BRAND.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const buildSummaryText = () => {
    return [
      `Solicitud de Cotización Técnica — ${MTS_BRAND.legalName}`,
      `Contacto: ${form.nombre.trim()}`,
      `Empresa / Planta: ${form.empresa.trim()}`,
      `Correo de respuesta: ${form.correo.trim()}`,
      `Servicio requerido: ${form.servicio}`,
      `Alcance / Detalles:`,
      form.detalles.trim(),
    ].join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.empresa.trim() || !form.correo.trim() || !form.detalles.trim()) {
      setFormError('Completa tu nombre, empresa/planta, correo y descripción técnica del proyecto.');
      return;
    }
    setFormError(null);
    const bodyText = buildSummaryText();
    const subject = encodeURIComponent(
      `[Cotización MTS] ${form.servicio} — ${form.empresa.trim()}`
    );
    const body = encodeURIComponent(bodyText);
    setPreparedSummary({
      text: bodyText,
      mailtoHref: `mailto:${MTS_BRAND.email}?subject=${subject}&body=${body}`,
    });
  };

  const handleCopyBrief = async () => {
    if (!preparedSummary) return;
    try {
      await navigator.clipboard.writeText(preparedSummary.text);
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  return (
    <>
      {/* Sectores industriales */}
      <section id="cobertura" className="py-16 sm:py-20 border-b border-zinc-800/80 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <span className="w-2 h-px bg-[#e0bc34]" />
                <span>Sectores y Cobertura</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
                Atención especializada para industria y parques productivos
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Operamos desde Durango, México, atendiendo plantas industriales, proyectos de
              manufactura y operaciones productivas regionales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECTORS.map((sector) => (
              <div
                key={sector.code}
                className="mts-surface rounded-2xl p-5 space-y-3 hover:border-zinc-700 transition-colors"
              >
                <span className="text-[11px] font-mono text-amber-400 font-semibold block">
                  {sector.code}
                </span>
                <h3 className="text-base font-heading font-semibold text-white">
                  {sector.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {sector.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y Solicitud de Cotización */}
      <section id="contacto" className="py-16 sm:py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Información directa */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                  <span className="w-2 h-px bg-[#e0bc34]" />
                  <span>Contacto Directo</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white">
                  Cotiza tu proyecto o servicio en planta
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Comparte los datos de tu planta y el requerimiento técnico. Preparamos tu
                  solicitud estructurada para emitir el presupuesto formal con folio MTS.
                </p>
              </div>

              <div className="space-y-3">
                <div className="mts-surface rounded-2xl p-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400">Razón operativa</p>
                    <p className="text-sm font-heading font-semibold text-white mt-0.5">
                      {MTS_BRAND.fullName}
                    </p>
                  </div>
                </div>

                <div className="mts-surface rounded-2xl p-4 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400">Ubicación base</p>
                    <p className="text-sm font-heading font-semibold text-white mt-0.5">
                      {MTS_BRAND.location}
                    </p>
                  </div>
                </div>

                <div className="mts-surface rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-zinc-400">Correo corporativo</p>
                      <a
                        href={`mailto:${MTS_BRAND.email}`}
                        className="text-sm font-mono font-semibold text-white hover:text-amber-400 transition-colors truncate block mt-0.5"
                      >
                        {MTS_BRAND.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 h-9 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    aria-label="Copiar correo corporativo"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario técnico */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="mts-surface mts-bracket-box rounded-2xl p-5 sm:p-7 space-y-5"
              >
                <div className="border-b border-zinc-800/80 pb-3.5">
                  <h3 className="text-base font-heading font-bold text-white">
                    Solicitud de Cotización Técnica
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Genera el resumen técnico listo para envío directo al equipo de ingeniería MTS.
                  </p>
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl flex items-center gap-2 text-xs text-red-300"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="mts-nombre"
                      className="text-[11px] font-mono text-zinc-400 block font-semibold"
                    >
                      Nombre y cargo *
                    </label>
                    <input
                      id="mts-nombre"
                      type="text"
                      required
                      maxLength={120}
                      placeholder="Ej. Ing. Fernando Rivas — Mantenimiento"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full h-11 px-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="mts-empresa"
                      className="text-[11px] font-mono text-zinc-400 block font-semibold"
                    >
                      Empresa o planta *
                    </label>
                    <input
                      id="mts-empresa"
                      type="text"
                      required
                      maxLength={150}
                      placeholder="Ej. Planta Industrial Durango"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="w-full h-11 px-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="mts-correo"
                      className="text-[11px] font-mono text-zinc-400 block font-semibold"
                    >
                      Correo corporativo *
                    </label>
                    <input
                      id="mts-correo"
                      type="email"
                      required
                      maxLength={150}
                      placeholder="nombre@empresa.com"
                      value={form.correo}
                      onChange={(e) => setForm({ ...form, correo: e.target.value })}
                      className="w-full h-11 px-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="mts-servicio"
                      className="text-[11px] font-mono text-zinc-400 block font-semibold"
                    >
                      Especialidad requerida *
                    </label>
                    <div className="relative">
                      <select
                        id="mts-servicio"
                        value={form.servicio}
                        onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                        className="w-full h-11 pl-3.5 pr-10 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-zinc-950 text-zinc-100">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label
                      htmlFor="mts-detalles"
                      className="text-[11px] font-mono text-zinc-400 block font-semibold"
                    >
                      Descripción técnica / alcance del proyecto *
                    </label>
                    <textarea
                      id="mts-detalles"
                      required
                      rows={4}
                      maxLength={1200}
                      placeholder="Indica piezas, materiales, condiciones de planta o tiempos estimados..."
                      value={form.detalles}
                      onChange={(e) => setForm({ ...form, detalles: e.target.value })}
                      className="w-full p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-y"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Sin envío oculto ni rastreo comercial
                  </span>

                  <button
                    type="submit"
                    className="btn-mts-primary h-11 px-5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Preparar solicitud de cotización</span>
                  </button>
                </div>

                {preparedSummary && (
                  <div
                    role="status"
                    className="p-4 rounded-xl bg-zinc-950 border border-amber-400/35 space-y-3 animate-content-fade"
                  >
                    <div className="flex items-center gap-2 text-xs font-heading font-semibold text-amber-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Solicitud técnica lista para envío</span>
                    </div>

                    <pre className="p-3 rounded-lg bg-[#101012] border border-zinc-800 text-[11px] font-mono text-zinc-300 whitespace-pre-wrap break-words">
                      {preparedSummary.text}
                    </pre>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={preparedSummary.mailtoHref}
                        className="btn-mts-primary h-9 px-4 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Abrir en cliente de correo</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="h-9 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-200 inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        {copiedBrief ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Resumen copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Copiar resumen</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectorsAndContactSection;
