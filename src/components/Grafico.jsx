import { useEffect, useRef } from "react";

const dados = [
  // 3 itens do seu evento, ex.: ingressos vendidos por tipo, inscritos por percurso...
  { rotulo: "Participante", valor: 120 },
  { rotulo: "Com Kit", valor: 80 },
  { rotulo: "Visitante", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "14px sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (use a cor do seu evento)
      ctx.fillStyle = "#06b6d4";

      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, 24);

      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#111827";
      ctx.fillText(item.rotulo, 10, y + 12);

      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(String(item.valor), 110 + largura + 10, y + 12);
    });
  }, []);

  return (
    <section id="grafico" className="py-16 px-4 max-w-5xl mx-auto border-b border-gray-800">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
        Inscrições Confirmadas por Tipo
      </h2>
      <p className="text-gray-300 text-sm mb-6 max-w-2xl">
        Confira a distribuição atual de participantes garantidos para a GameJam OC 48h.
      </p>
      <div className="inline-block bg-gray-800/60 p-4 sm:p-6 rounded-2xl border border-gray-700 max-w-full overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras mostrando inscrições por tipo: Participante com 120 inscritos, Com Kit com 80 inscritos e Visitante com 45 inscritos."
          className="max-w-full bg-white rounded-xl shadow-md block"
        />
      </div>
    </section>
  );
}

export default Grafico;
