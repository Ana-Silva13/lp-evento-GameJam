import { eventoInfo } from "../data/evento";

export default function Programacao() {
    return (
        <section id="programacao" class="py-16 px-4 bg-gray-900/50 border-b border-gray-800">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                    Cronograma 48h
                </h2>
                <div class="space-y-4">
                    {eventoInfo.programacao.map((item, index) => (
                        <div
                            key={index}
                            class="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-800 hover:border-gray-750 transition-colors"
                        >
                            <div class="flex-shrink-0 bg-ciano/10 text-ciano font-bold text-xs uppercase px-2 py-1 rounded">
                                {item.dia}
                            </div>
                            <div class="font-mono text-sm text-gray-400 min-w-[50px]">
                                {item.horario}
                            </div>
                            <div class="text-gray-200 font-medium">
                                {item.atividade}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
