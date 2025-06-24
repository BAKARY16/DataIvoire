// src/types/index.ts

export interface Artisan {
    id: string;
    name: string;
    description: string;
    products: Product[];
}

export interface Product {
    id: string;
    artisanId: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export interface Client {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface Admin {
    id: string;
    name: string;
    email: string;
}

export interface AuthContextType {
    user: Artisan | Client | Admin | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}