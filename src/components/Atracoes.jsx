import { eventoInfo } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

export default function Atracoes() {
    return (
        <section id="atracoes" className="py-16 px-4 max-w-5xl mx-auto border-b border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Mentores Confirmados
            </h2>
            <p className="text-gray-200 text-sm mb-8">Eles estarão disponíveis durante toda a maratona para ajudar sua equipe.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" aria-label="Lista de mentores">
                {eventoInfo.mentores.map((mentor, index) => (
                    <CartaoAtracao
                        key={index}
                        nome={mentor.nome}
                        area={mentor.area}
                        descricao={mentor.descricao}
                    />
                ))}
            </div>
        </section>
    );
}
