import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { authService } from './common/config/authService';

import LoginPage from './features/auth/LoginPage';
import LogoutPage from './features/logout/LogoutPage';
import Template from './template/Template';

const WithPrivateRoute = authService.withPrivateRoute(Template);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route
          path="/*"
          element={<WithPrivateRoute />}
        />
      </Routes>
    </BrowserRouter>
  );
}
