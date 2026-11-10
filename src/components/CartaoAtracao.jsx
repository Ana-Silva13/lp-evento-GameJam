export default function CartaoAtracao({ nome, area, descricao }) {
    return (
        <article className="bg-gray-800/60 p-6 rounded-2xl border border-gray-600 flex flex-col justify-between h-full">
            <div>
                <span className="text-xs font-semibold text-ciano uppercase tracking-wider bg-ciano/10 px-2 py-1 rounded">
                    {area}
                </span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{nome}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{descricao}</p>
            </div>
        </article>
    );
}
