import { eventoInfo } from "../data/evento";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 px-4 sm:px-6 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            O Evento
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Sobre o Evento
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
            {eventoInfo.sobreTexto}
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
          aria-label="Estatísticas do evento"
        >
          {eventoInfo.numeros.map((num, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between hover:border-[var(--border-strong)] transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="font-display text-3xl sm:text-4xl font-bold text-[var(--accent-green-text)] mb-1.5">
                {num.quantidade}
              </div>
              <div className="text-xs sm:text-sm font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                {num.rotulo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
