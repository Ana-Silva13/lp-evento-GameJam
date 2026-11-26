import { eventoInfo } from "../data/evento";

const diaLabel = { "Sex": "Sexta", "Sáb": "Sábado", "Dom": "Domingo" };
const diaColor = { "Sex": "var(--accent-primary-text)", "Sáb": "var(--accent-secondary-text)", "Dom": "var(--accent-primary-text)" };
const diaIdx   = { "Sex": 1, "Sáb": 2, "Dom": 3 };

export default function Programacao() {
  // Group by day
  const grouped = eventoInfo.programacao.reduce((acc, item) => {
    if (!acc[item.dia]) acc[item.dia] = [];
    acc[item.dia].push(item);
    return acc;
  }, {});

  const dias = Object.keys(grouped).sort((a, b) => diaIdx[a] - diaIdx[b]);

  return (
    <section
      id="programacao"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page-alt)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <p className="section-label mb-3">Agenda</p>
          <span className="accent-bar mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
            >
              As 48 horas,<br />hora a hora.
            </h2>
            <p className="text-sm max-w-xs text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
              De sexta à noite até domingo à tarde — cada momento importa.
            </p>
          </div>
        </div>

        {/* Timeline — 3 days side by side on desktop */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          aria-label="Programação do evento"
        >
          {dias.map((dia, dayIndex) => (
            <div key={dia}>
              {/* Day header */}
              <div
                className="flex items-center gap-3 mb-5 pb-4 border-b"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span
                  className="font-pixel text-xs tracking-wider px-2.5 py-1.5 rounded"
                  style={{
                    backgroundColor: "var(--accent-primary-soft)",
                    color: diaColor[dia],
                    border: "1px solid var(--accent-primary)",
                    borderColor: diaColor[dia],
                    opacity: dayIndex > 0 ? 0.8 : 1,
                  }}
                >
                  {diaLabel[dia] || dia}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "var(--border-subtle)" }}
                />
              </div>

              {/* Items */}
              <div className="space-y-1">
                {grouped[dia].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 py-3.5 px-4 rounded-lg transition-colors"
                    style={{ cursor: "default" }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--bg-surface)"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    {/* Time */}
                    <span
                      className="font-mono-tech text-xs font-semibold mt-0.5 shrink-0 w-9 text-right"
                      style={{ color: "var(--accent-primary-text)" }}
                    >
                      {item.horario}
                    </span>

                    {/* Dot + line */}
                    <div className="flex flex-col items-center shrink-0 mt-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--accent-primary)", opacity: 0.7 }}
                      />
                      {i < grouped[dia].length - 1 && (
                        <span
                          className="w-px flex-1 mt-1"
                          style={{ height: 24, backgroundColor: "var(--border-subtle)" }}
                        />
                      )}
                    </div>

                    {/* Activity */}
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.atividade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <span
            className="font-pixel text-[10px] tracking-widest px-2.5 py-1 rounded shrink-0"
            style={{
              backgroundColor: "var(--accent-primary-soft)",
              color: "var(--accent-primary-text)",
              border: "1px solid var(--accent-primary)",
            }}
          >
            IMPORTANTE
          </span>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            O tema da jam é <strong style={{ color: "var(--text-primary)" }}>revelado apenas na abertura</strong>, na sexta às 19h.
            Ninguém sabe antes — isso é parte do desafio.
          </p>
        </div>
      </div>
    </section>
  );
}
