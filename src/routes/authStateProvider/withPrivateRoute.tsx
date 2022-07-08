import {
  ElementType,
  useContext, useEffect,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './authContext';

export default function withPrivateRoute(ComposedComponent: ElementType) {
  return function RequireAuthentication() {
    const createAuthContext = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (!createAuthContext!.isAuthenticated) {
        navigation(getAuthPathWithFromProperty(location.pathname));
      }
    }, [createAuthContext!.isAuthenticated]);

    return createAuthContext!.isAuthenticated ? <ComposedComponent /> : null;
  };

  function getAuthPathWithFromProperty(from: string) {
    return `/auth/login${from !== '/' && from ? `?from=${from}` : ''}`;
  }
}
