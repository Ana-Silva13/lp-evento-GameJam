import { eventoInfo } from "../data/evento";

export default function Rodape() {
    return (
        <footer class="bg-grafite border-t border-gray-800 py-8 px-4 text-center text-xs text-gray-500">
            <div class="max-w-5xl mx-auto space-y-2">
                <p class="font-semibold text-gray-400">{eventoInfo.nome}</p>
                <p>{eventoInfo.local}</p>
                <p class="italic text-gray-600">Evento fictício criado para fins didáticos</p>
            </div>
        </footer>
    );
}
