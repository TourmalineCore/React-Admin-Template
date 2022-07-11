import {
  FunctionComponent, useContext, useEffect,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './authContext';

export default function withPrivateRoute(ComposedComponent: FunctionComponent<JSX.Element>) {
  return function RequireAuthentication(props: any) {
    const createAuthContext = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (!createAuthContext!.isAuthenticated) {
        navigation(getAuthPathWithFromProperty(location.pathname));
      }
    }, [createAuthContext!.isAuthenticated]);

    return createAuthContext!.isAuthenticated ? <ComposedComponent {...props} /> : null;
  };

  function getAuthPathWithFromProperty(from: string) {
    return `/auth/login${from !== '/' && from ? `?from=${from}` : ''}`;
  }
}
