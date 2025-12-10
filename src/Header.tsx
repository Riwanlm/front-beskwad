import { Link } from "react-router-dom";

export const Header = () => {
  const isLogged = true;
  return (
    <header className="sticky top-5 my-5 container m-auto">
      <nav className="border border-0.5 border-[#fcb523] rounded-4xl backdrop-blur-md py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-4">
          <Link to="/" className="flex items-center">
            <img
              src="../src/assets/react.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo React"
            />
            <span className="self-center text-xl font-bold">Beskwad</span>
          </Link>
          <div className="items-center w-full lg:flex lg:w-auto">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {isLogged ? (
            <div className="flex items-center">
              <a href="#" className="text-white hover:text-[#fcb423]">
                Déconnexion
              </a>
              <a
                href="#"
                className="ml-4 w-8 h-8 flex items-center justify-center border rounded-full border-white hover:text-[#fcb423] hover:border-[#fcb423]"
              >
                <span className="material-symbols-outlined">person</span>
              </a>
            </div>
          ) : (
            <Link className="text-white hover:text-[#fcb423]" to="/connexion">
              Connexion
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
