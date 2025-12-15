import "./App.css";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { Connexion } from "./Connexion";
import { Accueil } from "./Accueil";
import { Inscription } from "./Inscription";
import { Profil } from "./Profil";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
}

export default App;
