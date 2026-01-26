import { UserEvents } from "./components/UserEvents";
import { useAuthStore } from "./stores/authStore";

export const Profil = () => {

  const user = useAuthStore().user;

  // const { data, isLoading } = useSWR<TEvent[]>(
  //   `http://localhost:3000/events`,
  //   fetcher
  // );


  return (
    <div className="container m-auto flex flex-col gap-4">
      <div className="text-center uppercase text-3xl mt-10 mb-5">Bienvenu sur ton profil {user?.username}</div>
      <div className="h-100 w-auto border rounded-md border-[#fcb423]">
        <UserEvents />
      </div>
      <div className="h-100 w-auto border rounded-md border-[#fcb423]">Section évènements rejoins</div>
      <div className="h-100 w-auto border rounded-md border-[#fcb423] mb-10">Section profils </div>
    </div>
  );
};
