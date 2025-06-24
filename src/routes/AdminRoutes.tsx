import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLogin from '../pages/admin/AdminLogin';
import ManageUsers from '../pages/admin/ManageUsers';

const isAdminAuthenticated = () => {
    return localStorage.getItem('isAdmin') === 'true';
};

const AdminRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route
                path="/dashboard"
                element={isAdminAuthenticated() ? <AdminDashboard /> : <Navigate to="/admin/login" />}
            />
            <Route
                path="/manage-users"
                element={isAdminAuthenticated() ? <ManageUsers /> : <Navigate to="/admin/login" />}
            />
        </Routes>
    );
};

export default AdminRoutes;