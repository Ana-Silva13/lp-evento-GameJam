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
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[var(--bg-page-alt)]"
    >
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            Participação
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Garanta sua vaga
          </h2>
        </div>

        {enviado ? (
          <div
            className="rounded-2xl p-8 text-center border"
            style={{
              backgroundColor: "var(--status-success-bg)",
              borderColor: "var(--status-success-border)",
            }}
            role="status"
            aria-live="polite"
          >
            <div
              className="inline-flex items-center justify-center mb-4"
              style={{ color: "var(--status-success-text)" }}
            >
              <IconCheckCircle className="w-10 h-10" />
            </div>
            <h3
              className="font-display text-xl font-bold mb-2"
              style={{ color: "var(--status-success-text)" }}
            >
              Inscrição Confirmada!
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Parabéns, <strong className="text-[var(--text-primary)]">{nome}</strong>! Sua vaga
              para o tipo de ingresso{" "}
              <strong className="text-[var(--text-primary)]">"{ingresso}"</strong> foi garantida
              com sucesso. Nos vemos no Espaço Maker!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <label
                htmlFor="nome"
                className="block text-xs font-mono-tech font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider"
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
                className="w-full rounded-xl border px-4 py-3 text-sm bg-[var(--bg-input)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
                style={{
                  borderColor: erroNome
                    ? "var(--status-error-border)"
                    : "var(--border-strong)",
                }}
                placeholder="Seu nome"
                aria-invalid={Boolean(erroNome)}
                aria-describedby={erroNome ? "nome-erro" : undefined}
              />
              {erroNome && (
                <p
                  id="nome-erro"
                  className="text-xs mt-1.5 font-medium"
                  style={{ color: "var(--status-error-text)" }}
                >
                  {erroNome}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono-tech font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider"
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
                className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-input)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="ingresso"
                className="block text-xs font-mono-tech font-medium text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider"
              >
                Tipo de Ingresso
              </label>
              <select
                id="ingresso"
                required
                value={ingresso}
                onChange={(e) => setIngresso(e.target.value)}
                className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-input)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none"
              >
                <option value="">Selecione uma opção...</option>
                {eventoInfo.ingressos.map((opc, idx) => (
                  <option key={idx} value={opc}>
                    {opc}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="group btn-primary-cta w-full inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl mt-2 cursor-pointer"
            >
              <span>Concluir Inscrição</span>
              <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
