import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import ClientRoutes from './ClientRoutes';
import ArtisanRoutes from './ArtisanRoutes';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Routes pour les administrateurs */}
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* Routes pour les artisans */}
            <Route path="/artisan/*" element={<ArtisanRoutes />} />

            {/* Routes pour les clients */}
            <Route path="/*" element={<ClientRoutes />} />
        </Routes>
    );
};

export default AppRoutes;