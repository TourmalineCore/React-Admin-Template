import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../routes/authStateProvider/authContext';

export default function LogoutPage() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    history('/auth');
  }, []);

  return (
    <div>You are now logged out</div>
  );
}
