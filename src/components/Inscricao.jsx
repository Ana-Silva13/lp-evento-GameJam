import { useState } from "react";
import { eventoInfo } from "../data/evento";

export default function Inscricao() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [ingresso, setIngresso] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nome.trim().length < 3) {
            setErroNome("O nome deve ter pelo menos 3 letras.");
            return;
        }

        setErroNome("");
        if (nome && email && ingresso) {
            setEnviado(true);
        }
    };

    return (
        <section id="inscricao" className="py-16 px-4 max-w-md mx-auto border-b border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-verde to-ciano">
                Garanta sua vaga
            </h2>

            {enviado ? (
                <div className="bg-green-950/40 border border-green-500/70 rounded-2xl p-6 text-center" role="status" aria-live="polite">
                    <div className="text-4xl mb-3" aria-hidden="true">🎮</div>
                    <h3 className="text-xl font-bold text-green-300 mb-2">Inscrição Confirmada!</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">
                        Parabéns, <strong className="text-white">{nome}</strong>! Sua vaga para o tipo de ingresso <strong className="text-white">"{ingresso}"</strong> foi garantida com sucesso. Nos vemos no Espaço Maker!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800/40 p-6 rounded-2xl border border-gray-700">
                    <div>
                        <label htmlFor="nome" className="block text-xs font-medium text-gray-200 mb-1 uppercase tracking-wider">Nome Completo</label>
                        <input
                            id="nome"
                            type="text"
                            required
                            autoComplete="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={`w-full bg-gray-900 border ${erroNome ? "border-red-400" : "border-gray-600"} rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-verde transition-colors`}
                            placeholder="Seu nome"
                            aria-invalid={Boolean(erroNome)}
                            aria-describedby={erroNome ? "nome-erro" : undefined}
                        />
                        {erroNome && <p id="nome-erro" className="text-red-300 text-xs mt-1 font-medium">{erroNome}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-200 mb-1 uppercase tracking-wider">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-verde transition-colors"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="ingresso" className="block text-xs font-medium text-gray-200 mb-1 uppercase tracking-wider">Tipo de Ingresso</label>
                        <select
                            id="ingresso"
                            required
                            value={ingresso}
                            onChange={(e) => setIngresso(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-verde transition-colors"
                        >
                            <option value="">Selecione uma opção...</option>
                            {eventoInfo.ingressos.map((opc, idx) => (
                                <option key={idx} value={opc}>{opc}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-verde to-ciano text-gray-950 font-bold py-3 rounded-xl hover:opacity-90 focus-visible:opacity-90 transition-opacity mt-2 cursor-pointer"
                    >
                        Concluir Inscrição
                    </button>
                </form>
            )}
        </section>
    );
}
