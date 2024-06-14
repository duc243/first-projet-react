import "./App.css";
import Compteur from "./composant/Compteur";

export default function App() {
  const nom = 5;
  return (
    <div>
      <Compteur nom={nom}/>
    </div>
  );
}
