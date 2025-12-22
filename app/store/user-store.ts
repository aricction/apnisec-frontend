import {create} from "zustand";
import { AuthResponse } from "../types/authType";

interface UserState {
    user: AuthResponse["data"] | null;

    setUser: (user: AuthResponse["data"]) => void;
    logout:()=> void;
}

export const useUserStore  = create<UserState>((set)=> ({
    user: null,
    setUser: (user) => set({user}),
    logout: ()=> set({user: null}),
}));