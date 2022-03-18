import './LoginPage.css';

import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '@tourmalinecore/react-tc-ui-kit';
import LoginForm from './components/LoginForm/LoginForm';

import { AuthContext } from '../../routes/authStateProvider/authContext';

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      history('/');
    }
  }, [isAuthenticated]);

  return (
    <div className="auth-page">
      <LoginForm
        onSubmit={handleFormSubmit}
      >
        <Input
          id="login"
          className="auth-page__input"
          type="text"
          label="Login"
          value={formData.email}
          isInvalid={!formData.email && triedToSubmit}
          validationMessages={['Login should be filled']}
          isMessagesAbsolute
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          id="password"
          className="auth-page__input"
          type="password"
          label="Password"
          value={formData.password}
          isInvalid={!formData.password && triedToSubmit}
          validationMessages={['Password should be filled']}
          isMessagesAbsolute
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </LoginForm>
    </div>
  );

  function handleFormSubmit(e) {
    const {
      email,
      password,
    } = formData;

    e.preventDefault();

    setTriedToSubmit(true);

    if (email && password) {
      setIsAuthenticated(true);
    }
  }
}
