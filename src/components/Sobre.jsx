import { eventoInfo } from "../data/evento";

export default function Sobre() {
    return (
        <section id="sobre" class="py-16 px-4 max-w-5xl mx-auto border-b border-gray-800">
            <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Sobre o Evento
            </h2>
            <p class="text-gray-300 leading-relaxed text-lg mb-12">
                {eventoInfo.sobreTexto}
            </p>

            <div class="grid grid-cols-3 gap-4 text-center">
                {eventoInfo.numeros.map((num, index) => (
                    <div key={index} class="bg-gray-800/40 p-4 rounded-xl border border-gray-800">
                        <div class="text-2xl sm:text-4xl font-extrabold text-verde mb-1">{num.quantidade}</div>
                        <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{num.rotulo}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
