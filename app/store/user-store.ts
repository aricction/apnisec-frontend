import { create } from "zustand";
import { AuthResponse } from "../types/authType";

interface UserState {
  user: AuthResponse["data"] | null;
  isAuthenticated: boolean;
  setUser: (user: AuthResponse["data"]) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: typeof window !== "undefined" && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  isAuthenticated: !!(typeof window !== "undefined" && localStorage.getItem("user")),
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, isAuthenticated: false });
  },
}));
