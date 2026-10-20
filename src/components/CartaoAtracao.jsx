export default function CartaoAtracao({ nome, area, descricao }) {
    return (
        <div class="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/50 flex flex-col justify-between">
            <div>
                <span class="text-xs font-semibold text-ciano uppercase tracking-wider bg-ciano/10 px-2 py-1 rounded">
                    {area}
                </span>
                <h3 class="text-xl font-bold text-white mt-3 mb-2">{nome}</h3>
                <p class="text-sm text-gray-400 leading-relaxed">{descricao}</p>
            </div>
        </div>
    );
}
