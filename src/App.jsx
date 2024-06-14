import "./App.css";
import Compteur from "./composant/Compteur";

export default function App() {
  const nom = "Exousia";
  return (
    <div>
      <Compteur nom={nom}/>
    </div>
  );
}
