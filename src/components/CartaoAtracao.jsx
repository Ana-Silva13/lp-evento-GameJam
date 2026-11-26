const areaColors = {
  "Programação":   { bg: "var(--accent-secondary-soft)", text: "var(--accent-secondary-text)", border: "var(--accent-secondary)" },
  "Arte 2D":       { bg: "var(--accent-primary-soft)",   text: "var(--accent-primary-text)",   border: "var(--accent-primary)" },
  "Áudio":         { bg: "var(--accent-primary-soft)",   text: "var(--accent-primary-text)",   border: "var(--accent-primary)" },
  "Game design":   { bg: "var(--accent-secondary-soft)", text: "var(--accent-secondary-text)", border: "var(--accent-secondary)" },
};

export default function CartaoAtracao({ nome, area, descricao }) {
  const iniciais = nome
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  const color = areaColors[area] || areaColors["Programação"];

  return (
    <article
      className="mentor-card rounded-xl border p-6 h-full flex flex-col"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Avatar + área */}
      <div className="flex items-start justify-between gap-4 mb-5">
        {/* Geometric avatar */}
        <div
          className="relative w-14 h-14 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
          style={{ backgroundColor: color.bg, border: `1.5px solid ${color.border}` }}
          aria-hidden="true"
        >
          {/* Pixel grid pattern inside avatar */}
          <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full opacity-20" fill="none">
            <path d="M0 14 H56 M0 28 H56 M0 42 H56 M14 0 V56 M28 0 V56 M42 0 V56"
              stroke="currentColor" strokeWidth="1"/>
          </svg>
          <span
            className="relative font-display font-bold text-lg tracking-tight"
            style={{ color: color.text }}
          >
            {iniciais}
          </span>
        </div>

        {/* Area badge */}
        <span
          className="font-mono-tech text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1.5 rounded"
          style={{
            backgroundColor: color.bg,
            color: color.text,
            border: `1px solid ${color.border}`,
          }}
        >
          {area}
        </span>
      </div>

      {/* Name + description */}
      <h3
        className="font-display font-bold text-lg mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {nome}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
        {descricao}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-5 pt-4 border-t flex items-center gap-2"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color.text }}
        />
        <span className="font-mono-tech text-[10px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          Disponível durante toda a maratona
        </span>
      </div>
    </article>
  );
}
