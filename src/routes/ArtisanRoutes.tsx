import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArtisanProfile from '../components/Artisan/Profile';
import ArtisanDashboard from '../pages/artisan/ArtisanDashboard';

const ArtisanRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Profil de l'artisan */}
            <Route path="/profile" element={<ArtisanProfile />} />

            {/* Tableau de bord de l'artisan */}
            <Route path="/dashboard" element={<ArtisanDashboard />} />
        </Routes>
    );
};

export default ArtisanRoutes;