import { eventoInfo } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";
import { IconArrowRight, IconCalendar, IconMapPin } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-tech-grid border-b border-[var(--border-subtle)] py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="animate-fade-up font-display text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-5">
          {eventoInfo.nome}
        </h1>

        <p className="animate-fade-up-delay-1 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-9">
          {eventoInfo.slogan}
        </p>

        <div
          className="animate-fade-up-delay-1 mx-auto max-w-2xl rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 sm:p-5 mb-10 text-left"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-green-soft)] text-[var(--accent-green-text)] shrink-0">
                <IconCalendar className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                  Quando
                </p>
                <p className="text-sm font-medium text-[var(--text-primary)] leading-snug">
                  {eventoInfo.data}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:border-l sm:border-[var(--border-subtle)] sm:pl-4">
              <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] shrink-0">
                <IconMapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] font-mono-tech uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                  Onde
                </p>
                <p className="text-sm font-medium text-[var(--text-primary)] leading-snug">
                  {eventoInfo.local}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#inscricao"
            className="group btn-primary-cta w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold text-base px-7 py-3.5 rounded-xl"
          >
            <span>Garantir Minha Vaga</span>
            <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <BotaoLembrete />
        </div>
      </div>
    </section>
  );
}
