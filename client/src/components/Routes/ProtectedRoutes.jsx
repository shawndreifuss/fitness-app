import React, { useEffect} from 'react';
import {  useNavigate, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext'; // Import your user context

// Hook for protected route logic
function useAuthProtection() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);
}

// Hook for public route logic
function usePublicRouteProtection() {
  const navigate = useNavigate();
  const { user } = useUser();

 useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
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