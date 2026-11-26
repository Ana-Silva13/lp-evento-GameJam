import { eventoInfo } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

export default function Atracoes() {
  return (
    <section
      id="atracoes"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header — assimétrico */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Mentoria</p>
            <span className="accent-bar mb-6" />
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
            >
              Aprenda com quem<br />já fez antes.
            </h2>
          </div>
          <p
            className="text-sm max-w-xs sm:text-right pb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Quatro especialistas disponíveis do início ao fim da maratona.
          </p>
        </div>

        {/* Grid de mentores — 2x2 no desktop, 1 col no mobile */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          aria-label="Lista de mentores"
        >
          {eventoInfo.mentores.map((mentor, index) => (
            <CartaoAtracao
              key={index}
              nome={mentor.nome}
              area={mentor.area}
              descricao={mentor.descricao}
            />
          ))}
        </div>

        {/* Callout — sem equipe */}
        <div
          className="mt-10 p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row items-start gap-4 border"
          style={{
            backgroundColor: "var(--accent-primary-soft)",
            borderColor: "var(--accent-primary)",
          }}
        >
          <span
            className="font-pixel text-[10px] tracking-widest px-2.5 py-1 rounded shrink-0 mt-0.5"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--accent-primary-text)",
              border: "1px solid var(--accent-primary)",
            }}
          >
            DICA
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
            <strong>Não sabe programar?</strong> Sem problema.
            Artistas, músicos e designers são essenciais em qualquer equipe — os mentores estão aqui para ajudar todos.
          </p>
        </div>
      </div>
    </section>
  );
}
