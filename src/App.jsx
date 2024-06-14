import "./App.css";
import Compteur from "./composant/Compteur";

export default function App() {
  const age = 30;
  return (
    <div>
      <Compteur />
      {age > 20 && <Compteur age={age} />}
      <Compteur />
      <Compteur />
      <Compteur />
      <Compteur />
    </div>
  );
}
