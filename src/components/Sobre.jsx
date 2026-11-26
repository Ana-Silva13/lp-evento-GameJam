import { eventoInfo } from "../data/evento";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: label + headline */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <p className="section-label mb-3">O Evento</p>
              <span className="accent-bar mb-6" />
              <h2
                className="font-display font-bold leading-tight mb-0"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
              >
                Uma maratona de criação, aprendizado e jogo.
              </h2>
            </div>
          </div>

          {/* Right: text + stats */}
          <div className="lg:col-span-7">
            <p
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              {eventoInfo.sobreTexto}
            </p>

            {/* Stats — horizontal editorial strip */}
            <div
              className="grid grid-cols-3 border rounded-xl overflow-hidden"
              style={{ borderColor: "var(--border-subtle)" }}
              aria-label="Estatísticas do evento"
            >
              {eventoInfo.numeros.map((num, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-8 flex flex-col justify-center ${
                    index > 0 ? "border-l" : ""
                  }`}
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: index === 0 ? "var(--accent-primary-soft)" : "var(--bg-surface)",
                  }}
                >
                  <div
                    className="font-display font-bold mb-1"
                    style={{
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      color: index === 0 ? "var(--accent-primary-text)" : "var(--text-primary)",
                    }}
                  >
                    {num.quantidade}
                  </div>
                  <div
                    className="font-mono-tech text-[11px] uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {num.rotulo}
                  </div>
                </div>
              ))}
            </div>

            {/* Quem pode participar */}
            <div className="mt-8 p-5 rounded-xl border-l-4" style={{
              borderLeftColor: "var(--accent-primary)",
              backgroundColor: "var(--bg-subtle)",
            }}>
              <p className="font-mono-tech text-[11px] uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                Quem pode participar
              </p>
              <div className="flex flex-wrap gap-2">
                {["Programadores", "Artistas", "Músicos", "Designers", "Roteiristas", "Iniciantes"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded font-medium"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-strong)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
