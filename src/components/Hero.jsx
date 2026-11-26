import { eventoInfo } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";
import { IconArrowRight, IconCalendar, IconMapPin } from "./Icons";

/* ─── Pixel Art Composition: Game viewport com estética editorial ─── */
function HeroGraphic() {
  return (
    <div className="relative animate-slide-right" aria-hidden="true">
      {/* Terminal/editor frame */}
      <div
        className="rounded-xl border border-[var(--border-strong)] overflow-hidden"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 2px 0 var(--accent-primary)" }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)]"
          style={{ backgroundColor: "var(--bg-subtle)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--accent-primary)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--accent-primary-light)", opacity: 0.4 }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--accent-secondary)", opacity: 0.4 }} />
          </div>
          <span className="font-mono-tech text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            gamejam_oc_2027.gd
          </span>
          <span className="font-pixel text-[10px] tracking-wider" style={{ color: "var(--accent-primary-text)" }}>
            ◉ LIVE
          </span>
        </div>

        {/* SVG Game Scene */}
        <div style={{ backgroundColor: "var(--bg-page)" }}>
          <svg viewBox="0 0 400 240" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* Background micro-grid */}
            <defs>
              <pattern id="hgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--grid-line)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="var(--bg-page)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <rect width="400" height="240" fill="url(#hgrid)" />
            <rect width="400" height="120" fill="url(#skyGrad)" />

            {/* Distant city silhouette — pixel style */}
            {/* Building 1 */}
            <rect x="20" y="130" width="28" height="80" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            <rect x="28" y="118" width="12" height="14" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            {/* windows */}
            <rect x="24" y="136" width="6" height="6" fill="var(--accent-primary)" fillOpacity="0.4"/>
            <rect x="34" y="136" width="6" height="6" fill="var(--accent-secondary)" fillOpacity="0.4"/>
            <rect x="24" y="150" width="6" height="6" fill="var(--accent-secondary)" fillOpacity="0.6"/>
            <rect x="34" y="150" width="6" height="6" fill="var(--accent-primary)" fillOpacity="0.3"/>
            <rect x="24" y="164" width="6" height="6" fill="var(--accent-primary)" fillOpacity="0.5"/>

            {/* Building 2 */}
            <rect x="56" y="150" width="22" height="60" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            <rect x="60" y="156" width="6" height="6" fill="var(--accent-secondary)" fillOpacity="0.5"/>
            <rect x="68" y="156" width="6" height="6" fill="var(--accent-primary)" fillOpacity="0.3"/>

            {/* Building 3 — tall */}
            <rect x="286" y="110" width="32" height="100" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            <rect x="294" y="100" width="16" height="12" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            <rect x="300" y="94" width="4" height="8" fill="var(--accent-primary)" fillOpacity="0.7"/>
            <rect x="290" y="118" width="8" height="6" fill="var(--accent-secondary)" fillOpacity="0.5"/>
            <rect x="302" y="118" width="8" height="6" fill="var(--accent-primary)" fillOpacity="0.4"/>
            <rect x="290" y="130" width="8" height="6" fill="var(--accent-primary)" fillOpacity="0.6"/>
            <rect x="302" y="130" width="8" height="6" fill="var(--accent-secondary)" fillOpacity="0.3"/>

            {/* Building 4 */}
            <rect x="326" y="140" width="26" height="70" fill="var(--bg-subtle)" stroke="var(--border-subtle)" strokeWidth="1"/>
            <rect x="330" y="148" width="6" height="6" fill="var(--accent-secondary)" fillOpacity="0.5"/>
            <rect x="340" y="148" width="6" height="6" fill="var(--accent-primary)" fillOpacity="0.4"/>

            {/* Foreground platform / ground */}
            <rect x="0" y="200" width="400" height="40" fill="var(--bg-subtle)"/>
            <rect x="0" y="200" width="400" height="3" fill="var(--accent-primary)" fillOpacity="0.8"/>

            {/* Platforms */}
            {/* Low platform */}
            <rect x="90" y="175" width="80" height="8" rx="2" fill="var(--border-strong)"/>
            <rect x="90" y="175" width="80" height="2" rx="1" fill="var(--accent-secondary)" fillOpacity="0.6"/>

            {/* Mid platform */}
            <rect x="200" y="148" width="70" height="8" rx="2" fill="var(--border-strong)"/>
            <rect x="200" y="148" width="70" height="2" rx="1" fill="var(--accent-primary)" fillOpacity="0.7"/>

            {/* High platform */}
            <rect x="150" y="120" width="50" height="6" rx="2" fill="var(--border-subtle)"/>

            {/* Character — pixel art style */}
            {/* Body */}
            <rect x="104" y="151" width="18" height="18" rx="1" fill="var(--text-primary)"/>
            {/* Eyes */}
            <rect x="108" y="155" width="3" height="3" fill="var(--bg-page)"/>
            <rect x="115" y="155" width="3" height="3" fill="var(--bg-page)"/>
            {/* Shirt accent */}
            <rect x="104" y="162" width="18" height="7" rx="0" fill="var(--accent-primary)" fillOpacity="0.8"/>
            {/* Legs */}
            <rect x="106" y="169" width="5" height="6" fill="var(--border-strong)"/>
            <rect x="115" y="169" width="5" height="6" fill="var(--border-strong)"/>

            {/* Collectibles */}
            {/* Star gem */}
            <rect x="223" y="122" width="12" height="12" rx="2" fill="var(--accent-primary)" fillOpacity="0.9"/>
            <rect x="226" y="125" width="4" height="4" fill="#fff" fillOpacity="0.6"/>

            {/* Diamond */}
            <rect x="163" y="97" width="10" height="10" rx="1"
              fill="var(--accent-secondary)" fillOpacity="0.85"
              transform="rotate(45 168 102)"/>

            {/* Jump trajectory dashed arc */}
            <path
              d="M122 150 Q155 100 220 128"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeOpacity="0.7"
            />

            {/* HUD overlay top-left */}
            <text x="16" y="22" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="400">
              SCENE · gamejam_oc_2027
            </text>
            <text x="16" y="36" fill="var(--accent-primary-text)" fontSize="9" fontFamily="JetBrains Mono, monospace">
              TIMER › 47:58:21
            </text>

            {/* HUD score top-right */}
            <text x="384" y="22" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="end">
              EQUIPES: 30
            </text>
            <text x="384" y="36" fill="var(--accent-secondary-text)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="end">
              MENTORES: 8
            </text>

            {/* Bottom HUD bar */}
            <rect x="0" y="222" width="400" height="18" fill="var(--bg-page)" fillOpacity="0.6"/>
            <text x="16" y="234" fill="var(--accent-primary-text)" fontSize="9" fontFamily="JetBrains Mono, monospace">
              TEMA: [REVELADO NA ABERTURA · SEX 19H]
            </text>
            <text x="384" y="234" fill="var(--text-muted)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="end">
              ENGINE: GODOT
            </text>
          </svg>
        </div>

        {/* Build pipeline footer */}
        <div
          className="px-4 py-3 flex items-center justify-between gap-2 border-t border-[var(--border-subtle)]"
          style={{ backgroundColor: "var(--bg-subtle)" }}
        >
          <div className="flex items-center gap-1.5 flex-wrap font-mono-tech text-[10px]" style={{ color: "var(--text-muted)" }}>
            {["01 IDEIA", "02 PROTO", "03 BUILD", "04 PUBLISH"].map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                {i > 0 && <span style={{ color: "var(--border-strong)" }}>›</span>}
                <span
                  style={{
                    color: i === 3 ? "var(--accent-primary-text)" : i === 2 ? "var(--text-primary)" : "var(--text-muted)",
                    fontWeight: i === 3 ? 600 : 400,
                  }}
                >
                  {step}
                </span>
              </span>
            ))}
          </div>
          <span
            className="font-pixel text-[10px] tracking-wider"
            style={{ color: "var(--accent-secondary-text)" }}
          >
            48H
          </span>
        </div>
      </div>

      {/* Floating badge — edição */}
      <div
        className="absolute -top-3 -right-3 font-pixel text-[10px] tracking-wider px-3 py-1.5 rounded border-2"
        style={{
          backgroundColor: "var(--accent-primary)",
          borderColor: "var(--accent-primary-light)",
          color: "#fff",
        }}
      >
        2027
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-micro-grid pointer-events-none" />

      {/* Accent glow — top left corner */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-primary-soft) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 xl:col-span-7">

            {/* Eyebrow — monospace label */}
            <div className="animate-fade-up flex items-center gap-2 mb-6">
              <span
                className="font-pixel text-[10px] tracking-widest uppercase px-2.5 py-1 rounded"
                style={{
                  backgroundColor: "var(--accent-primary-soft)",
                  color: "var(--accent-primary-text)",
                  border: "1px solid var(--accent-primary)",
                }}
              >
                Edição 2027
              </span>
              <span className="font-mono-tech text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
                · Osvaldo Cruz/SP
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up mb-6">
              <h1
                className="font-display font-bold leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "var(--text-primary)" }}
              >
                Game<br />
                <span style={{ color: "var(--accent-primary)" }}>Jam</span>{" "}
                <span
                  className="inline-block font-pixel"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 3rem)",
                    color: "var(--accent-primary-text)",
                    letterSpacing: "0.05em",
                    verticalAlign: "middle",
                  }}
                >
                  OC_48h
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p
              className="animate-fade-up-delay-1 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {eventoInfo.slogan}
            </p>

            {/* Meta strip — data e local */}
            <div className="animate-fade-up-delay-1 flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" style={{ color: "var(--accent-primary-text)" }}>
                  <IconCalendar className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                    Quando
                  </p>
                  <p className="text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>
                    {eventoInfo.data}
                  </p>
                </div>
              </div>

              <div
                className="hidden sm:block w-px"
                style={{ backgroundColor: "var(--border-subtle)" }}
              />

              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" style={{ color: "var(--accent-secondary-text)" }}>
                  <IconMapPin className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-mono-tech text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>
                    Onde
                  </p>
                  <p className="text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>
                    {eventoInfo.local}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#inscricao"
                className="group btn-primary-cta inline-flex items-center justify-center gap-2.5 font-semibold text-base px-7 py-4 rounded-lg"
              >
                <span>Garantir Minha Vaga</span>
                <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <BotaoLembrete />
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-up-delay-3 mt-10 pt-8 border-t flex items-center gap-8"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {eventoInfo.numeros.map((num) => (
                <div key={num.rotulo}>
                  <p
                    className="font-display font-bold text-2xl sm:text-3xl"
                    style={{ color: "var(--accent-primary-text)" }}
                  >
                    {num.quantidade}
                  </p>
                  <p
                    className="font-mono-tech text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {num.rotulo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: graphic ── */}
          <div className="lg:col-span-6 xl:col-span-5">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
