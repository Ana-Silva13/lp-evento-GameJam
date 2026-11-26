import { eventoInfo } from "../data/evento";

export default function Rodape() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-page)] py-10 px-4 sm:px-6 text-center text-xs text-[var(--text-muted)]">
      <div className="max-w-5xl mx-auto space-y-2">
        <p className="font-display text-sm font-semibold text-[var(--text-primary)]">
          {eventoInfo.nome}
        </p>
        <p className="text-[var(--text-secondary)]">{eventoInfo.local}</p>
        <p className="italic">Evento fictício criado para fins didáticos</p>
      </div>
    </footer>
  );
}
