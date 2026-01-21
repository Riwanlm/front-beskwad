import useSWR from "swr";
import { Map } from "./components/Map";
import { Link } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export type TEvent = {
  id: number;
  title: string;
  description: string;
  location: string;
  latitude: string;
  longitude: string;
  date: string;
  id_user: string;
  created_at: string;
  update_at: string;
};

export const Accueil = () => {
  const { data, isLoading } = useSWR<TEvent[]>(
    `http://localhost:3000/events`,
    fetcher
  );

  return (
    <div className="container mx-auto">
      <section className="h-80 w-auto bg-[url(../src/assets/annie-spratt-ocz2K0KrDKE-unsplash.jpg)] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-4">
        <h1 className="bg-black/30 border-none border-white/30 outline-white/30 shadow-xl/55 rounded-xl text-white text-center text-4xl uppercase font-extrabold p-4 italic">Marre de faire du sport en mode solo ? <br />
          Rejoins l'aventure Beskwad !</h1>
        <Link to="/inscription" >
          <button className="btn bg-[#fcb523] border border-white rounded-4xl btn-xs hover:bg-white/30 hover:text-[#fcb523] hover:border-[#fcb523] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> <CircleArrowRight size={24} />Inscrit toi par ici </button>
        </Link>
      </section>
      <section className="h-80 w-auto">
        SECTION 2
      </section>
      <section className="h-80 w-auto">
        SECTION 3
      </section>
      <section>
        <h2 className="text-2xl">Retrouver les derniers évènements ajouter :</h2>
        {isLoading ? <p>Chargement ...</p> : <Map events={data} />}
      </section>
    </div>
  );
};
