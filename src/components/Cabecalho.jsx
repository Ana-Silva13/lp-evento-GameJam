import { useState } from "react";
import { eventoInfo } from "../data/evento";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header class="sticky top-0 z-50 bg-grafite/95 backdrop-blur-md border-b border-gray-800 px-4 py-4">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Linha do Logo + Botão Hambúrguer */}
        <div class="flex items-center justify-between w-full sm:w-auto">
          <span class="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
            {eventoInfo.nome}
          </span>
          {/* Botão do Menu Celular */}
          <button 
            onClick={() => setMenuAberto(!menuAberto)}
            class="sm:hidden text-gray-400 hover:text-white text-sm font-medium border border-gray-700 px-3 py-1.5 rounded-lg cursor-pointer"
            aria-expanded={menuAberto}
          >
            {menuAberto ? "Fechar X" : "Menu ☰"}
          </button>
        </div>

        {/* Links de Navegação */}
        <nav class={`${menuAberto ? "block" : "hidden"} sm:block`}>
          <ul class="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium text-gray-300 pt-2 sm:pt-0">
            <li><a href="#sobre" onClick={() => setMenuAberto(false)} class="hover:text-verde transition-colors block py-1">Sobre</a></li>
            <li><a href="#programacao" onClick={() => setMenuAberto(false)} class="hover:text-verde transition-colors block py-1">Programação</a></li>
            <li><a href="#atracoes" onClick={() => setMenuAberto(false)} class="hover:text-verde transition-colors block py-1">Mentores</a></li>
            <li><a href="#faq" onClick={() => setMenuAberto(false)} class="hover:text-verde transition-colors block py-1">FAQ</a></li>
            <li><a href="#inscricao" onClick={() => setMenuAberto(false)} class="hover:text-verde transition-colors block py-1">Inscrição</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

