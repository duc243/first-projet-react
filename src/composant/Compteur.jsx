import { useState } from "react"


export default function Compteur() {
  const [compteur, setCompteur] = useState(5)
  const incremented = () => {
    setCompteur( compteur + 1)
  }
  const decremented = () => {
    setCompteur( compteur - 1)
  }
  return (
    <div className="compteur">
        <button onClick={incremented}>+</button>
        <p className={ compteur < 0 && 'error'}>{compteur}</p>
        <button onClick={decremented}>-</button>
    </div>
  )
}
