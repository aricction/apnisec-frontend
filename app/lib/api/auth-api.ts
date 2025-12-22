import { AuthResponse, RegisterRequest, LoginRequest} from "@/app/types/authType";
import API from "./axios";

export const createUserByRegister = async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await API.post<AuthResponse>("/api/auth/register", data);
    return response.data;
}

export const getUserByLogin = async (data: LoginRequest) => {
  const response = await API.post("/api/auth/login", data);
  return response.data;
};
