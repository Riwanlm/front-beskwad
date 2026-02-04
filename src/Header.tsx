import { Home, LogIn, LogOut, PlusCircle, Search, TextAlignJustify, UserPlus, UserRoundCog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "./stores/authStore";

export const Header = () => {
  const navigate = useNavigate();
  const { isLogged, logout } = useAuthStore();

  const Disconnect = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      console.log(response);
      logout();
      navigate("/");
    } catch (err) {
      console.error("Erreur réseau ou inattendu :", err);
      logout(); // Déconnecter même en cas d'erreur
      navigate("/");
    }
  };
  return (
    <div className="navbar border border-0.5 border-[#fcb523] rounded-4xl backdrop-blur-md py-2.5 sticky top-5 my-5 container m-auto z-50">
      <div className="navbar-start">
        <Link to="/" className="btn ml-2 w-10 h-10 flex items-center justify-center border btn-circle border-white hover:text-OrangeBase hover:border-OrangeBase"><Home size={20} /></Link>
      </div>
      <div className="navbar-center">
        <span className="self-center text-xl uppercase font-bold">~ Beskwad ~</span>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn ml-2 w-10 h-10 flex items-center justify-center border btn-circle border-white hover:text-OrangeBase hover:border-OrangeBase">
            <TextAlignJustify size={20} />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow shadow-[#fcb523]">
            {isLogged ? (
              <>
                <li><Link to="/profil"><UserRoundCog size={16} /> Mon compte</Link></li>
                <li><Link to="#"><Search size={16} /> Rechercher un évènement</Link></li>
                <li><Link to="#"><PlusCircle size={16} /> Ajouter un évènement</Link></li>
                <li><Link to="/" onClick={() => Disconnect()}><LogOut size={16} /> Déconnexion</Link></li>
              </>
            )
              : (
                <>
                  <li><Link to="/inscription"><UserPlus size={16} /> Inscription</Link></li>
                  <li><Link to="/connexion"><LogIn size={16} />Connexion</Link></li>
                </>
              )}

          </ul>
        </div>
      </div>
    </div>

  );
};


