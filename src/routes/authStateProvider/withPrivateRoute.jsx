import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from './authContext';

export default function WithPrivateRoute({ ComposedComponent }) {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      history(getAuthPathWithFromProperty(location.pathname));
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <ComposedComponent location={location} /> : null;

  function getAuthPathWithFromProperty(from) {
    return `/auth${from !== '/' && from ? `?from=${from}` : ''}`;
  }
}
