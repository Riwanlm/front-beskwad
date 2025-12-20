import { create } from "zustand";

interface AuthState {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  toggleIsLogged: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogged: false,
  setIsLogged: (value: boolean) => set({ isLogged: value }),
  toggleIsLogged: () => set((state) => ({ isLogged: !state.isLogged })),
}));
