import { eventoInfo } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

export default function Atracoes() {
  return (
    <section
      id="atracoes"
      className="py-16 sm:py-20 px-4 sm:px-6 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            Mentoria
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Mentores Confirmados
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Eles estarão disponíveis durante toda a maratona para ajudar sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" aria-label="Lista de mentores">
          {eventoInfo.mentores.map((mentor, index) => (
            <CartaoAtracao
              key={index}
              nome={mentor.nome}
              area={mentor.area}
              descricao={mentor.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
