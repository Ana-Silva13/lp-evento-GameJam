import { eventoInfo } from "../data/evento";

export default function Programacao() {
  return (
    <section
      id="programacao"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-page-alt)] border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            Agenda
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Cronograma 48h
          </h2>
        </div>

        <div className="space-y-3" aria-label="Programação do evento">
          {eventoInfo.programacao.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-4 hover:border-[var(--border-strong)] transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="inline-flex items-center justify-center min-w-[44px] px-2.5 py-1 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] font-mono-tech font-semibold text-xs uppercase">
                {item.dia}
              </span>
              <span className="font-mono-tech text-sm font-medium text-[var(--text-muted)] min-w-[48px]">
                {item.horario}
              </span>
              <span className="text-[var(--text-primary)] font-medium text-sm sm:text-base">
                {item.atividade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
