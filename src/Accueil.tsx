import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type TEvent = {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  id_user: string;
  created_at: string;
  update_at: string;
};

export const Accueil = () => {
  const { data, error, isLoading } = useSWR<TEvent[]>(
    `http://localhost:3000/events`,
    fetcher
  );

  if (data) console.log(data, "COUCOU");

  return (
    <div className="container mx-auto">
      <div className="h-1500 bg-gray-600">
        <h1>Projet BeSkwad 👋</h1>
        {isLoading ? <p>C'est en train de LOAD ...</p> : null}
        {error ? <div>ERROR</div> : null}
        {data &&
          data.map((event: TEvent) => <div key={event.id}>{event.title}</div>)}
      </div>
    </div>
  );
};
