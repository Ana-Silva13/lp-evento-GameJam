import { eventoInfo } from "../data/evento";

export default function Sobre() {
    return (
        <section id="sobre" className="py-16 px-4 max-w-5xl mx-auto border-b border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Sobre o Evento
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg mb-12 max-w-3xl">
                {eventoInfo.sobreTexto}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center" aria-label="Estatísticas do evento">
                {eventoInfo.numeros.map((num, index) => (
                    <div key={index} className="bg-gray-800/60 p-4 rounded-xl border border-gray-700">
                        <div className="text-2xl sm:text-4xl font-extrabold text-verde mb-1">{num.quantidade}</div>
                        <div className="text-xs sm:text-sm text-gray-200 uppercase tracking-wider">{num.rotulo}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
