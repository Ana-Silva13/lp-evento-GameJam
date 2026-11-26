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

    const textColor   = isDark ? "#f0eee8" : "#0f0e0b";
    const valueColor  = isDark ? "#b8b4aa" : "#3d3c38";
    const trackColor  = isDark ? "rgba(240, 238, 232, 0.07)" : "rgba(15, 14, 11, 0.06)";
    const barColors   = isDark
      ? ["#f97316", "#fb923c", "#fdba74"]
      : ["#c45c00", "#e36b00", "#ea9640"];

    const maior = Math.max(...dados.map((d) => d.valor));
    const maxBarWidth = 200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * maxBarWidth;
      const y = 28 + i * 52;

      // Track
      ctx.fillStyle = trackColor;
      ctx.beginPath();
      ctx.roundRect(120, y, maxBarWidth, 22, 4);
      ctx.fill();

      // Bar
      ctx.fillStyle = barColors[i % barColors.length];
      ctx.beginPath();
      ctx.roundRect(120, y, largura, 22, 4);
      ctx.fill();

      // Label
      ctx.fillStyle = textColor;
      ctx.font = "500 12px 'Inter', sans-serif";
      ctx.fillText(item.rotulo, 0, y + 11);

      // Value
      ctx.fillStyle = valueColor;
      ctx.font = "600 11px 'JetBrains Mono', monospace";
      ctx.fillText(String(item.valor), 120 + largura + 10, y + 11);
    });
  }, [theme]);

  return (
    <section
      id="grafico"
      className="py-20 sm:py-28 px-5 sm:px-8 border-b border-[var(--border-subtle)]"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: headline */}
          <div className="lg:col-span-5">
            <p className="section-label mb-3">Panorama</p>
            <span className="accent-bar mb-6" />
            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text-primary)" }}
            >
              Vagas sendo preenchidas em tempo real.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Acompanhe a distribuição de inscrições confirmadas por tipo de participação.
            </p>

            {/* Legend */}
            <div className="mt-8 space-y-2.5">
              {dados.map((item, i) => {
                const colors = ["var(--accent-primary-text)", "var(--accent-primary-light)", "var(--text-secondary)"];
                return (
                  <div key={item.rotulo} className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-sm shrink-0"
                      style={{ backgroundColor: colors[i] }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {item.rotulo}
                    </span>
                    <span
                      className="font-mono-tech text-xs ml-auto"
                      style={{ color: "var(--accent-primary-text)" }}
                    >
                      {item.valor}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: canvas chart */}
          <div className="lg:col-span-7">
            <div
              className="rounded-xl border p-6 sm:p-8"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Chart header */}
              <div
                className="flex items-center justify-between gap-2 mb-6 pb-4 border-b"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span
                  className="font-mono-tech text-[11px] uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  Inscrições confirmadas
                </span>
                <span
                  className="font-pixel text-[10px] tracking-wider px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--accent-primary-soft)",
                    color: "var(--accent-primary-text)",
                  }}
                >
                  ATUALIZADO
                </span>
              </div>

              <canvas
                ref={canvasRef}
                width={380}
                height={190}
                role="img"
                aria-label="Gráfico de barras: Participante 120, Com Kit 80, Visitante 45."
                className="max-w-full block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grafico;
