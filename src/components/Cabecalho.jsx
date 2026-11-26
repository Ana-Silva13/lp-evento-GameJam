import { useEffect, useState } from "react";
import { eventoInfo } from "../data/evento";
import { useTheme } from "../context/ThemeContext";
import { IconClose, IconGamepad, IconMenu, IconMoon, IconSun } from "./Icons";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#atracoes", label: "Mentores" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#inscricao", label: "Inscrição" },
];

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!menuAberto) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuAberto]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border-subtle)] backdrop-blur-md"
      style={{ backgroundColor: "var(--bg-header)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 group rounded-lg py-1"
          aria-label={eventoInfo.nome + " – início"}
        >
          {/* Pixel logo mark */}
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded border-2 border-[var(--accent-primary)] bg-[var(--accent-primary-soft)]"
            aria-hidden="true"
            style={{ color: "var(--accent-primary-text)" }}
          >
            <IconGamepad className="w-4 h-4" />
          </span>
          <span className="font-display font-bold text-base tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
            {eventoInfo.nome}
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-5">
          {/* Desktop nav */}
          <nav id="menu-principal" aria-label="Menu principal" className="hidden md:block">
            <ul className="flex items-center gap-5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent-primary)] after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA in nav */}
          <a
            href="#inscricao"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-mono-tech font-semibold uppercase tracking-wider btn-primary-cta"
          >
            Inscreva-se
          </a>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            className="inline-flex items-center justify-center w-9 h-9 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--accent-primary-text)] hover:border-[var(--accent-primary)] active:scale-95 cursor-pointer"
          >
            {isDark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuAberto((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)] active:scale-95 cursor-pointer"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Menu principal móvel"
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-4"
        >
          <ul className="flex flex-col gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="block px-3 py-2.5 rounded hover:bg-[var(--accent-primary-soft)] hover:text-[var(--accent-primary-text)] text-[var(--text-secondary)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-[var(--border-subtle)]">
              <a
                href="#inscricao"
                onClick={() => setMenuAberto(false)}
                className="block px-3 py-2.5 rounded text-sm font-semibold text-[var(--accent-primary-text)]"
              >
                → Garantir minha vaga
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
