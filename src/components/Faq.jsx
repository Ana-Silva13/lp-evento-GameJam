import { useState } from "react";
import { perguntasFrequentes } from "../data/evento";

function ItemFaq({ pergunta, resposta }) {
    const [aberto, setAberto] = useState(false);

    return (
        <div class="border border-gray-800 rounded-xl bg-gray-800/20 overflow-hidden">
            <button
                onClick={() => setAberto(!aberto)}
                class="w-full text-left p-5 font-medium text-white flex justify-between items-center hover:bg-gray-800/40 transition-colors cursor-pointer"
            >
                <span>{pergunta}</span>
                <span class="text-ciano font-bold text-lg">{aberto ? "−" : "+"}</span>
            </button>
            {aberto && (
                <div class="p-5 pt-0 text-sm text-gray-400 border-t border-gray-800/60 bg-gray-950/20 leading-relaxed">
                    {resposta}
                </div>
            )}
        </div>
    );
}

export default function Faq() {
    return (
        <section id="faq" class="py-16 px-4 max-w-3xl mx-auto border-b border-gray-800">
            <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Perguntas Frequentes
            </h2>
            <div class="space-y-4">
                {perguntasFrequentes.map((item, index) => (
                    <ItemFaq key={index} pergunta={item.pergunta} resposta={item.resposta} />
                ))}
            </div>
        </section>
    );
}
