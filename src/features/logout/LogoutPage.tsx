import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../routes/authStateProvider/authContext';

function LogoutPage() {
  const createAuthContext = useContext(AuthContext);

  const history = useNavigate();

  useEffect(() => {
    createAuthContext!.setIsAuthenticated(false);
    history('/auth');
  }, []);

  return (
    <div>You are now logged out</div>
  );
}

export default LogoutPage;
