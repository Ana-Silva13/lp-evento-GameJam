import { useState } from "react";
import { perguntasFrequentes } from "../data/evento";
import { IconChevronDown } from "./Icons";

function ItemFaq({ pergunta, resposta, respostaId, index }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div
      className="border rounded-lg overflow-hidden transition-colors"
      style={{
        borderColor: aberto ? "var(--accent-primary)" : "var(--border-subtle)",
        backgroundColor: "var(--bg-surface)",
      }}
    >
      <h3>
        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-controls={respostaId}
          className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex justify-between items-center gap-4 cursor-pointer"
          style={{ color: "var(--text-primary)" }}
        >
          <div className="flex items-center gap-4">
            <span
              className="font-mono-tech text-[10px] font-semibold shrink-0 w-5"
              style={{ color: "var(--accent-primary-text)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-base font-medium">{pergunta}</span>
          </div>
          <IconChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${aberto ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div
        id={respostaId}
        hidden={!aberto}
        className="px-5 pb-5 sm:px-6"
        style={{ paddingLeft: "calc(1.25rem + 1rem + 20px)" }}
      >
        <p
          className="text-sm leading-relaxed border-t pt-4"
          style={{ color: "var(--text-secondary)", borderColor: "var(--border-subtle)" }}
        >
          {resposta}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: label + headline */}
          <div className="lg:col-span-4">
            <div className="lg:sticky top-24">
              <p className="section-label mb-3">FAQ</p>
              <span className="accent-bar mb-6" />
              <h2
                className="font-display font-bold leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text-primary)" }}
              >
                Dúvidas comuns antes de se inscrever.
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Se a sua dúvida não estiver aqui, entre em contato pelo e-mail do evento.
              </p>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-2.5" aria-label="Perguntas frequentes">
              {perguntasFrequentes.map((item, index) => (
                <ItemFaq
                  key={index}
                  pergunta={item.pergunta}
                  resposta={item.resposta}
                  respostaId={`faq-resposta-${index}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
