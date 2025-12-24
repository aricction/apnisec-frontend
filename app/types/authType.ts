export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    status: string;
    message: string;
    data?: {
        user: {
            id: string;
            email: string;
            name: string;
        }
    }
}