import { eventoInfo } from "../data/evento";

export default function Hero() {
    return (
        <section class="relative bg-grafite py-20 px-4 text-center border-b border-gray-800">
            <div class="max-w-3xl mx-auto">
                <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
                    {eventoInfo.nome}
                </h1>
                <p class="text-lg sm:text-xl text-gray-400 mb-8 font-light">
                    {eventoInfo.slogan}
                </p>
                <div class="bg-gray-800/50 rounded-2xl p-6 mb-8 inline-block text-left border border-gray-700/50">
                    <p class="text-sm text-gray-400 mb-2"> 📅 <span class="text-gray-200 font-medium">{eventoInfo.data}</span></p>
                    <p class="text-sm text-gray-400">📍<span class="text-gray-200 font-medium">{eventoInfo.local}</span></p>
                </div>
                <div>
                    <a
                        href="#inscricao"
                        class="inline-block bg-gradient-to-r from-verde to-ciano text-gray-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
                    >
                        Garantir Minha Vaga!!!
                    </a>
                </div>
            </div>
        </section>
    );
}
