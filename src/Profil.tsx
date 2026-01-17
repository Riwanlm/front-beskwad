import { useAuthStore } from "./stores/authStore";

export const Profil = () => {

  const user = useAuthStore().user;
  

  return (
    <div className="container m-auto">
      <div className="text-center">Bienvenu sur ton profil {user?.username}</div>
    </div>
  );
};
