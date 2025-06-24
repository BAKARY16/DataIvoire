import axios from 'axios';

// Utilisation d'une variable d'environnement pour l'URL de l'API
const API_URL = (import.meta as any).env.VITE_API_URL || 'https://api.oartisan.ci'; // Valeur par défaut si non définie

// Fonction pour récupérer tous les artisans
export const fetchArtisans = async () => {
    const response = await axios.get(`${API_URL}/artisans`);
    return response.data;
};

// Fonction pour récupérer un artisan par son ID
export const fetchArtisanById = async (id: string) => {
    const response = await axios.get(`${API_URL}/artisans/${id}`);
    return response.data;
};

// Fonction pour créer un nouvel artisan
export const createArtisan = async (artisanData: any) => {
    const response = await axios.post(`${API_URL}/artisans`, artisanData);
    return response.data;
};

// Fonction pour mettre à jour un artisan
export const updateArtisan = async (id: string, artisanData: any) => {
    const response = await axios.put(`${API_URL}/artisans/${id}`, artisanData);
    return response.data;
};

// Fonction pour supprimer un artisan
export const deleteArtisan = async (id: string) => {
    const response = await axios.delete(`${API_URL}/artisans/${id}`);
    return response.data;
};

// Fonction pour récupérer les produits d'un artisan
export const fetchArtisanProducts = async (artisanId: string) => {
    const response = await axios.get(`${API_URL}/artisans/${artisanId}/products`);
    return response.data;
};