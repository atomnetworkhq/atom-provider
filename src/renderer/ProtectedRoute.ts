import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token'); 
    
    if (!token) {
      navigate('/login'); 
      return; 
    }
    
    const checkTokenValidity = async () => {
      try {
        const response = await fetch('http://atom.atomnetwork.xyz:3000/api/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          navigate('/login'); 
        }
      } catch (error) {
        console.error('Error checking token validity:', error);
        navigate('/login'); 
      }
    };

    checkTokenValidity();
  }, [navigate]);

  return children; 
};

export default ProtectedRoute;