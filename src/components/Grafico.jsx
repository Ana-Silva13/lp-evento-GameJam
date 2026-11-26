import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const dados = [
  { rotulo: "Participante", valor: 120 },
  { rotulo: "Com Kit", valor: 80 },
  { rotulo: "Visitante", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const isDark = theme === "dark";

    const textColor = isDark ? "#e2e8f0" : "#0f172a";
    const valueColor = isDark ? "#94a3b8" : "#475569";
    const trackColor = isDark ? "rgba(148, 163, 184, 0.12)" : "rgba(15, 23, 42, 0.06)";
    const barColors = isDark
      ? ["#22c55e", "#06b6d4", "#38bdf8"]
      : ["#16a34a", "#0891b2", "#0284c7"];

    const maior = Math.max(...dados.map((d) => d.valor));
    const maxBarWidth = 210;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "500 13px Inter, sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * maxBarWidth;
      const y = 24 + i * 48;

      ctx.fillStyle = trackColor;
      ctx.beginPath();
      ctx.roundRect(112, y, maxBarWidth, 24, 6);
      ctx.fill();

      ctx.fillStyle = barColors[i % barColors.length];
      ctx.beginPath();
      ctx.roundRect(112, y, largura, 24, 6);
      ctx.fill();

      ctx.fillStyle = textColor;
      ctx.fillText(item.rotulo, 12, y + 12);

      ctx.fillStyle = valueColor;
      ctx.fillText(String(item.valor), 112 + largura + 12, y + 12);
    });
  }, [theme]);

  return (
    <section
      id="grafico"
      className="py-16 sm:py-20 px-4 sm:px-6 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-cyan-text)] mb-2">
            Panorama
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            Inscrições Confirmadas por Tipo
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Confira a distribuição atual de participantes garantidos para a GameJam OC 48h.
          </p>
        </div>

        <div
          className="inline-block rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-6 max-w-full overflow-x-auto"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <canvas
            ref={canvasRef}
            width={390}
            height={172}
            role="img"
            aria-label="Gráfico de barras mostrando inscrições por tipo: Participante com 120 inscritos, Com Kit com 80 inscritos e Visitante com 45 inscritos."
            className="max-w-full block"
          />
        </div>
      </div>
    </section>
  );
}

export default Grafico;
