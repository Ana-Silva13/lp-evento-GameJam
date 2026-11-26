import { eventoInfo } from "../data/evento";
import { IconGamepad } from "./Icons";

export default function Rodape() {
  return (
    <footer
      className="border-t px-5 sm:px-8 py-12"
      style={{
        backgroundColor: "var(--bg-page)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded border-2"
                aria-hidden="true"
                style={{
                  borderColor: "var(--accent-primary)",
                  backgroundColor: "var(--accent-primary-soft)",
                  color: "var(--accent-primary-text)",
                }}
              >
                <IconGamepad className="w-4 h-4" />
              </span>
              <span
                className="font-display font-bold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {eventoInfo.nome}
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {eventoInfo.local}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {eventoInfo.data}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              {["#sobre", "#programacao", "#atracoes", "#faq", "#inscricao"].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[var(--accent-primary-text)] transition-colors capitalize"
                  >
                    {href.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="font-mono-tech text-[11px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            © 2027 GameJam OC · Todos os direitos reservados
          </p>
          <p className="font-mono-tech text-[11px]" style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            Evento fictício criado para fins didáticos
          </p>
        </div>
      </div>
    </footer>
  );
}
