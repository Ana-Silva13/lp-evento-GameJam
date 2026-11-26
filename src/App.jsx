import { ThemeProvider } from "./context/ThemeContext";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Faq from "./components/Faq";
import Grafico from "./components/Grafico";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--bg-surface)] focus:px-4 focus:py-3 focus:text-[var(--text-primary)] focus:border focus:border-[var(--border-strong)] focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo-principal" className="flex-1">
          <Hero />
          <Sobre />
          <Programacao />
          <Atracoes />
          <Faq />
          <Grafico />
          <Inscricao />
        </main>
        <Rodape />
      </div>
    </ThemeProvider>
  );
}

export default App;
