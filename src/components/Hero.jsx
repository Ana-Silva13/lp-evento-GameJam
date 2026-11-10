import { eventoInfo } from "../data/evento";

export default function Hero() {
    return (
        <section id="top" className="relative bg-grafite py-20 px-4 text-center border-b border-gray-800">
            <div className="max-w-3xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ciano mb-4">GameJam OC 48h</p>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
                    {eventoInfo.nome}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
                    {eventoInfo.slogan}
                </p>
                <div className="bg-gray-800/70 rounded-2xl p-6 mb-8 inline-block text-left border border-gray-600/80">
                    <p className="text-sm text-gray-200 mb-2">
                        <span aria-hidden="true">📅</span>
                        <span className="font-medium ml-2">{eventoInfo.data}</span>
                    </p>
                    <p className="text-sm text-gray-200">
                        <span aria-hidden="true">📍</span>
                        <span className="font-medium ml-2">{eventoInfo.local}</span>
                    </p>
                </div>
                <div>
                    <a
                        href="#inscricao"
                        className="inline-block bg-gradient-to-r from-verde to-ciano text-gray-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 focus-visible:opacity-90 transition-all transform hover:-translate-y-0.5"
                    >
                        Garantir Minha Vaga
                    </a>
                </div>
            </div>
        </section>
    );
}
