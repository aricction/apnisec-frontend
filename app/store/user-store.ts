import {create} from "zustand";
import { AuthResponse } from "../types/authType";

interface UserState {
    user: AuthResponse["data"] | null;
    isAuthenticated: boolean;
    setUser: (user: AuthResponse["data"]) => void;
    logout:()=> void;
}

export const useUserStore  = create<UserState>((set)=> ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set(
        {
            user,
            isAuthenticated: !!user,
        }),
    logout: ()=> set({user: null,
        isAuthenticated: false,
    }),
}));