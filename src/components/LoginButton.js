import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for routing

const LoginButton = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <Button className='login-btn' onClick={handleLogin}>
      Login
    </Button>
  );
};

export default LoginButton;
