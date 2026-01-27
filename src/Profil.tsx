import { UserEvents } from "./components/UserEvents";
import { UserJoinEvents } from "./components/UserJoinEvents";
import { UserSettings } from "./components/UserSettings";
import { useAuthStore } from "./stores/authStore";

export const Profil = () => {

  const user = useAuthStore().user;

  // const { data, isLoading } = useSWR<TEvent[]>(
  //   `http://localhost:3000/events`,
  //   fetcher
  // );


  return (
    <div className="container m-auto flex flex-col gap-4">
      <div className="text-center uppercase text-3xl mt-10 mb-5">Bienvenu sur ton profil <span className="text-[#fcb423]">{user?.username}</span></div>
      <UserSettings />
      <UserEvents />
      <UserJoinEvents />
    </div>
  );
};
