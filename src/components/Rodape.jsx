import { eventoInfo } from "../data/evento";

export default function Rodape() {
    return (
        <footer className="bg-grafite border-t border-gray-800 py-8 px-4 text-center text-xs text-gray-300">
            <div className="max-w-5xl mx-auto space-y-2">
                <p className="font-semibold text-gray-100">{eventoInfo.nome}</p>
                <p>{eventoInfo.local}</p>
                <p className="italic text-gray-400">Evento fictício criado para fins didáticos</p>
            </div>
        </footer>
    );
}
