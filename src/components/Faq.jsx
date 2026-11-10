import { useState } from "react";
import { perguntasFrequentes } from "../data/evento";

function ItemFaq({ pergunta, resposta, respostaId }) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className="border border-gray-700 rounded-xl bg-gray-800/25 overflow-hidden">
            <h3>
                <button
                    type="button"
                    onClick={() => setAberto(!aberto)}
                    aria-expanded={aberto}
                    aria-controls={respostaId}
                    className="w-full text-left p-5 font-medium text-white flex justify-between items-center gap-4 hover:bg-gray-800/50 focus-visible:bg-gray-800/50 transition-colors cursor-pointer"
                >
                    <span>{pergunta}</span>
                    <span aria-hidden="true" className="text-ciano font-bold text-lg min-w-5 text-center">{aberto ? "−" : "+"}</span>
                </button>
            </h3>
            <div
                id={respostaId}
                hidden={!aberto}
                className="p-5 pt-0 text-sm text-gray-200 border-t border-gray-700 bg-gray-950/20 leading-relaxed"
            >
                {resposta}
            </div>
        </div>
    );
}

export default function Faq() {
    return (
        <section id="faq" className="py-16 px-4 max-w-3xl mx-auto border-b border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Perguntas Frequentes
            </h2>
            <div className="space-y-4" aria-label="Perguntas frequentes">
                {perguntasFrequentes.map((item, index) => (
                    <ItemFaq
                        key={index}
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                        respostaId={`faq-resposta-${index}`}
                    />
                ))}
            </div>
        </section>
    );
}
