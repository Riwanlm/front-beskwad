export const Header = () => {
  return (
    <header className="sticky top-5 my-5 container m-auto">
      <nav className="border border-0.5 border-[#fcb523]/50 rounded-4xl backdrop-blur-md py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-bold">Beskwad</span>
          </a>
          <div className="items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white/60 hover:text-[#fcb423] lg:p-0"
                >
                  Company
                </a>
              </li>
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
        </div>
      </nav>
    </header>
  );
};
