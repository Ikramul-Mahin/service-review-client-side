import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div class="flex justify-center items-center space-x-2">

            <div class=" spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple-500 " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;