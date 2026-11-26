export default function CartaoAtracao({ nome, area, descricao }) {
  const iniciais = nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("");

  return (
    <article
      className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between h-full hover:border-[var(--border-strong)] transition-colors"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] text-xs font-mono-tech font-medium uppercase tracking-wider">
            {area}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-xs font-mono-tech font-semibold text-[var(--text-secondary)]"
          >
            {iniciais}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
          {nome}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {descricao}
        </p>
      </div>
    </article>
  );
}
