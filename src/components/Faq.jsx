import { useState } from "react";
import { perguntasFrequentes } from "../data/evento";
import { IconChevronDown } from "./Icons";

function ItemFaq({ pergunta, resposta, respostaId }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-colors hover:border-[var(--border-strong)]"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h3>
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-controls={respostaId}
          className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 font-medium text-[var(--text-primary)] flex justify-between items-center gap-4 hover:bg-[var(--bg-subtle)]/60 cursor-pointer"
        >
          <span className="text-sm sm:text-base">{pergunta}</span>
          <IconChevronDown
            className={`w-4 h-4 shrink-0 text-[var(--accent-cyan-text)] transition-transform duration-200 ${
              aberto ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={respostaId}
        hidden={!aberto}
        className="px-5 pb-5 pt-3 sm:px-6 text-sm text-[var(--text-secondary)] border-t border-[var(--border-subtle)] bg-[var(--bg-page-alt)]/50 leading-relaxed"
      >
        {resposta}
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-page-alt)] border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            FAQ
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="space-y-3" aria-label="Perguntas frequentes">
          {perguntasFrequentes.map((item, index) => (
            <ItemFaq
              key={index}
              pergunta={item.pergunta}
              resposta={item.resposta}
              respostaId={`faq-resposta-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
