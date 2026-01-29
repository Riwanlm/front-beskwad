import { create } from "zustand";

export type User = {
  id?: string;
  email?: string;
  username?: string;
};

interface AuthState {
  isLogged: boolean;
  user: User | null;
  isLoading: boolean;
  setIsLogged: (value: boolean) => void;
  setUser: (user: User | null) => void;
  checkAuth: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogged: false,
  user: null,
  isLoading: true,
  setIsLogged: (value: boolean) => set({ isLogged: value }),
  setUser: (user: User | null) => set({ user }),
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        set({ isLogged: true, user: data.user, isLoading: false });
      } else {
        set({ isLogged: false, user: null, isLoading: false });
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'authentification:", error);
      set({ isLogged: false, user: null, isLoading: false });
    }
  },
  logout: () => {
    set({ isLogged: false, user: null });
  },
}));
