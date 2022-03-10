import { createContext, useState, useMemo } from 'react';

const AuthContext = createContext();

function AuthProvider({
  children,
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
  }));

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

export {
  AuthProvider,
  AuthContext,
};
