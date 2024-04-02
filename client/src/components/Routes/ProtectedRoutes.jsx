import React, { useEffect, useState} from 'react';
import {  useNavigate, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext'; // Import your user context

// Hook for protected route logic
function useAuthProtection() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [token, setToken] = useState(localStorage.getItem('token'));


  useEffect(() => {
    if (!user && !token) {
      navigate('/', { onReplace: true});
    }
  }, [user, navigate]);
}

// Hook for public route logic
function usePublicRouteProtection() {
  const navigate = useNavigate();
  const { user } = useUser();

 useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/profile', { replace: true });
      }, 3000);
    }
  }, [user, navigate]);
}

// Protected route component
const ProtectedRoute = () => {
  useAuthProtection();
  return <Outlet />;
};

// Public route component
const PublicRoute = ({ restricted }) => {
  if (restricted) {
    usePublicRouteProtection();
  }
  return <Outlet />;
};

export { ProtectedRoute, PublicRoute };