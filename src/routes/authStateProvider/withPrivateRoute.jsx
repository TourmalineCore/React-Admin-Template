import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from './authContext';

export default function withPrivateRoute(ComposedComponent) {
  return function RequireAuthentication(props) {
    const { isAuthenticated } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
      if (!isAuthenticated) {
        history.push(getAuthPathWithFromProperty(history.location.pathname));
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <ComposedComponent {...props} /> : null;
  };

  function getAuthPathWithFromProperty(from) {
    return `/auth/login${from !== '/' && from ? `?from=${from}` : ''}`;
  }
}
