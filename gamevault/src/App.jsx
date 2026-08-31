import Header from "./components/Header"
import RecipeCard from "./components/RecipeCard"
import Footer from "./components/Footer"

function App() {
  const receitas = [
    {
      id: 1,
      titulo: "Brownie",
      descricao: "Brownie de chocolate intenso, macio por dentro e com uma deliciosa casquinha por cima.",
      categoria: "Chocolate",
      dificuldade: "Fácil",
      tempo: "40 min",
      cor: "Chocolate",
    },
    {
      id: 2,
      titulo: "Cookies",
      descricao: "Cookies crocantes por fora, macios por dentro e recheados com gotas de chocolate.",
      categoria: "Biscoitos",
      dificuldade: "Fácil",
      tempo: "30 min",
      cor: "Biscoitos",
    },
    {
      id: 3,
      titulo: "Cupcake",
      descricao: "Cupcakes fofinhos de baunilha com uma cobertura cremosa e irresistível.",
      categoria: "Bolos",
      dificuldade: "Fácil",
      tempo: "35 min",
      cor: "Bolos",
    },
    {
      id: 4,
      titulo: "Petit Gâteau",
      descricao: "Bolinho de chocolate com uma casquinha delicada e recheio cremoso por dentro.",
      categoria: "Chocolate",
      dificuldade: "Médio",
      tempo: "25 min",
      cor: "Chocolate",
    },
    {
      id: 5,
      titulo: "Cheesecake",
      descricao: "Sobremesa cremosa com base crocante e uma deliciosa cobertura de frutas vermelhas.",
      categoria: "Sobremesas",
      dificuldade: "Médio",
      tempo: "1h 20min",
      cor: "Sobremesas",
    },
    {
      id: 6,
      titulo: "Rocambole",
      descricao: "Massa leve e fofinha enrolada com um recheio cremoso e saboroso.",
      categoria: "Bolos",
      dificuldade: "Médio",
      tempo: "50 min",
      cor: "Bolos",
    },
  ]

  return (
    <div className="min-h-screen bg-rose-50">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-950">
            Receitas deliciosas
          </h2>

          <p className="text-rose-800 mt-3">
            Encontre sua próxima sobremesa favorita.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {receitas.map((receita) => (
            <RecipeCard
              key={receita.id}
              titulo={receita.titulo}
              descricao={receita.descricao}
              categoria={receita.categoria}
              dificuldade={receita.dificuldade}
              tempo={receita.tempo}
              cor={receita.cor}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App