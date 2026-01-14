import "./App.css";
import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { Connexion } from "./Connexion";
import { Accueil } from "./Accueil";
import { Inscription } from "./Inscription";
import { Profil } from "./Profil";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";

function App() {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

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
