function RecipeCard({ titulo, descricao, categoria, dificuldade, tempo, cor }) {
  let estilo = ""

  if (cor === "Chocolate") {
    estilo = "border-l-amber-700"
  } else if (cor === "Biscoitos") {
    estilo = "border-l-orange-400"
  } else if (cor === "Bolos") {
    estilo = "border-l-purple-400"
  } else if (cor === "Sobremesas") {
    estilo = "border-l-red-400"
  }

  return (
    <article
      className={`rounded-2xl border border-stone-200 border-l-[6px] ${estilo} bg-white p-6 shadow-md hover:shadow-xl transition duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold uppercase text-rose-600">
          {categoria}
        </span>

        <span className="text-2xl">
          
        </span>
      </div>

      <h2 className="text-2xl font-bold text-stone-900 mb-3">
        {titulo}
      </h2>

      <p className="text-stone-600 leading-relaxed mb-5">
        {descricao}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-rose-50 px-3 py-1 rounded-full text-sm text-stone-600 shadow-sm">
          ⏱️ {tempo}
        </span>

        <span className="bg-rose-50 px-3 py-1 rounded-full text-sm text-stone-600 shadow-sm">
          ⭐ {dificuldade}
        </span>
      </div>

      <button className="bg-rose-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-rose-600 transition">
        Ver receita
      </button>
    </article>
  )
}

export default RecipeCard