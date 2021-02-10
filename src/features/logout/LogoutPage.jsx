import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../routes/authStateProvider/authContext';

export default function LogoutPage() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    setIsAuthenticated(false);
    history.push('/auth');
  }, []);

  return (
    <div>You are now logged out</div>
  );
}
