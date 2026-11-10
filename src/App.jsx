import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Faq from "./components/Faq"; // Importando a nova seção
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-gray-900 focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Faq />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}

export default App;

