import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './authContext';

export default function withPrivateRoute(ComposedComponent) {
  return function RequireAuthentication(props) {
    const { isAuthenticated } = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (!isAuthenticated) {
        navigation(getAuthPathWithFromProperty(location.pathname));
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <ComposedComponent {...props} /> : null;
  };

  function getAuthPathWithFromProperty(from) {
    return `/auth/login${from !== '/' && from ? `?from=${from}` : ''}`;
  }
}
