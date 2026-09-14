import { useEffect, useState } from "react"

function Relogio() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date())
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <span className="text-sm text-rose-200">
      {hora.toLocaleTimeString("pt-BR")}
    </span>
  )
}

export default Relogio