import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import React from 'react';
import AuthPage from './features/auth/AuthPage';
import LogoutPage from './features/logout/LogoutPage';
import Template from './template/Template';

import WithPrivateRoute from './routes/authStateProvider/withPrivateRoute';

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" element={<WithPrivateRoute ComposedComponent={Template} />} />
      </Routes>
    </Router>
  );
}
