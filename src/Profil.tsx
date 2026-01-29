import { UserEvents } from "./components/UserEvents";
import { UserJoinEvents } from "./components/UserJoinEvents";
import { UserSettings } from "./components/UserSettings";

export const Profil = () => {

  // const { data, isLoading } = useSWR<TEvent[]>(
  //   `http://localhost:3000/events`,
  //   fetcher
  // );


  return (
    <div className="container m-auto flex flex-col gap-4">
      <UserSettings />
      <UserEvents />
      <UserJoinEvents />
    </div>
  );
};
