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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-cyan-text)] rounded-lg py-1"
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent-green-text)]"
            aria-hidden="true"
          >
            <IconGamepad className="w-4 h-4" />
          </span>
          <span>{eventoInfo.nome}</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <nav id="menu-principal" aria-label="Menu principal" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative py-1.5 hover:text-[var(--text-primary)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent-cyan)] after:transition-all after:duration-200 hover:after:w-full rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] active:scale-95 cursor-pointer"
          >
            {isDark ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuAberto((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)] active:scale-95 cursor-pointer"
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {menuAberto ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Menu principal móvel"
          className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3"
        >
          <ul className="flex flex-col gap-1 text-sm font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
