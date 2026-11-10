import { eventoInfo } from "../data/evento";

export default function Programacao() {
    return (
        <section id="programacao" className="py-16 px-4 bg-gray-900/50 border-b border-gray-800">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                    Cronograma 48h
                </h2>
                <div className="space-y-4" aria-label="Programação do evento">
                    {eventoInfo.programacao.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl border border-gray-700"
                        >
                            <div className="flex-shrink-0 bg-ciano/15 text-ciano font-bold text-xs uppercase px-2 py-1 rounded">
                                {item.dia}
                            </div>
                            <div className="font-mono text-sm text-gray-200 min-w-[50px]">
                                {item.horario}
                            </div>
                            <div className="text-gray-100 font-medium">
                                {item.atividade}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
