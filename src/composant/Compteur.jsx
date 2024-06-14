import { useState, useEffect } from "react";

export default function Compteur(props) {
  const [compteur, setCompteur] = useState(5);
  const incremented = () => {
    setCompteur(compteur + 1);
  };
  const decremented = () => {
    setCompteur(compteur - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log('Exousia'); 
    }, 3000);
  });
  
  return (
    <>
      {
        props.age ? <p>Vous avez {props.age} </p> : null
      }
      <div className="compteur">
        <button onClick={incremented}>+</button>
        <p className={compteur < 0 && "error"}>{compteur}</p>
        <button onClick={decremented}>-</button>
      </div>
    </>
  );
}
