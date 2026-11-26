import { useState } from "react";
import { eventoInfo } from "../data/evento";
import { IconArrowRight, IconCheckCircle } from "./Icons";

export default function Inscricao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ingresso, setIngresso] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim().length < 3) {
      setErroNome("O nome deve ter pelo menos 3 letras.");
      return;
    }
    setErroNome("");
    if (nome && email && ingresso) {
      setEnviado(true);
    }
  };

  return (
    <section
      id="inscricao"
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ backgroundColor: "var(--bg-page-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <div className="lg:sticky top-24">
              <p className="section-label mb-3">Participação</p>
              <span className="accent-bar mb-6" />
              <h2
                className="font-display font-bold leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
              >
                Garanta sua vaga antes que acabe.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                São apenas <strong style={{ color: "var(--text-primary)" }}>30 equipes</strong>.
                A inscrição é gratuita e você já sai da GameJam com um jogo publicado.
              </p>

              {/* Ingressos overview */}
              <div
                className="rounded-xl border divide-y"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                  divideColor: "var(--border-subtle)",
                }}
              >
                {eventoInfo.ingressos.map((ing, i) => (
                  <div key={i} className="px-5 py-4 flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {ing}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {enviado ? (
              <div
                className="rounded-xl p-10 text-center border"
                style={{
                  backgroundColor: "var(--status-success-bg)",
                  borderColor: "var(--status-success-border)",
                }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="inline-flex items-center justify-center mb-5"
                  style={{ color: "var(--status-success-text)" }}
                >
                  <IconCheckCircle className="w-12 h-12" />
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-3"
                  style={{ color: "var(--status-success-text)" }}
                >
                  Inscrição Confirmada!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Parabéns, <strong style={{ color: "var(--text-primary)" }}>{nome}</strong>!
                  Sua vaga para{" "}
                  <strong style={{ color: "var(--text-primary)" }}>"{ingresso}"</strong> foi garantida.
                  Nos vemos no Espaço Maker!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border p-7 sm:p-9 space-y-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {/* Form header */}
                <div
                  className="pb-5 border-b flex items-center justify-between"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <h3 className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                    Formulário de Inscrição
                  </h3>
                  <span
                    className="font-pixel text-[10px] tracking-widest px-2 py-1 rounded"
                    style={{
                      backgroundColor: "var(--accent-primary-soft)",
                      color: "var(--accent-primary-text)",
                    }}
                  >
                    GRATUITO
                  </span>
                </div>

                {/* Nome */}
                <div>
                  <label
                    htmlFor="nome"
                    className="block font-mono-tech text-[11px] font-medium uppercase tracking-wider mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Nome Completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-input)",
                      borderColor: erroNome ? "var(--status-error-border)" : "var(--border-strong)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Seu nome completo"
                    aria-invalid={Boolean(erroNome)}
                    aria-describedby={erroNome ? "nome-erro" : undefined}
                  />
                  {erroNome && (
                    <p id="nome-erro" className="text-xs mt-1.5 font-medium" style={{ color: "var(--status-error-text)" }}>
                      {erroNome}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono-tech text-[11px] font-medium uppercase tracking-wider mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-input)",
                      borderColor: "var(--border-strong)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Ingresso */}
                <div>
                  <label
                    htmlFor="ingresso"
                    className="block font-mono-tech text-[11px] font-medium uppercase tracking-wider mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Tipo de Ingresso
                  </label>
                  <select
                    id="ingresso"
                    required
                    value={ingresso}
                    onChange={(e) => setIngresso(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                    style={{
                      backgroundColor: "var(--bg-input)",
                      borderColor: "var(--border-strong)",
                      color: ingresso ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                  >
                    <option value="">Selecione uma opção...</option>
                    {eventoInfo.ingressos.map((opc, idx) => (
                      <option key={idx} value={opc}>{opc}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group btn-primary-cta w-full inline-flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-lg mt-2 cursor-pointer"
                >
                  <span>Concluir Inscrição</span>
                  <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Ao se inscrever você concorda com as regras do evento.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
