import { useState } from "react";
import { eventoInfo } from "../data/evento";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-grafite/95 backdrop-blur-md border-b border-gray-700 px-4 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <a href="#top" className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano focus-visible:outline-none">
            {eventoInfo.nome}
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className="sm:hidden text-gray-200 hover:text-white focus-visible:text-white text-sm font-medium border border-gray-600 bg-gray-900/70 px-3 py-1.5 rounded-lg cursor-pointer min-h-10"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {menuAberto ? "Fechar X" : "Menu ☰"}
          </button>
        </div>

        <nav
          id="menu-principal"
          aria-label="Menu principal"
          className={`${menuAberto ? "block" : "hidden"} sm:block`}
        >
          <ul className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium text-gray-200 pt-2 sm:pt-0">
            <li><a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-verde focus-visible:text-verde transition-colors block py-2 px-1 rounded">Sobre</a></li>
            <li><a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-verde focus-visible:text-verde transition-colors block py-2 px-1 rounded">Programação</a></li>
            <li><a href="#atracoes" onClick={() => setMenuAberto(false)} className="hover:text-verde focus-visible:text-verde transition-colors block py-2 px-1 rounded">Mentores</a></li>
            <li><a href="#faq" onClick={() => setMenuAberto(false)} className="hover:text-verde focus-visible:text-verde transition-colors block py-2 px-1 rounded">Dúvidas</a></li>
            <li><a href="#inscricao" onClick={() => setMenuAberto(false)} className="hover:text-verde focus-visible:text-verde transition-colors block py-2 px-1 rounded">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
