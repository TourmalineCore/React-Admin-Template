import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import AuthField from './components/AuthField/AuthField';
import AuthForm from './components/AuthForm/AuthForm';

import { AuthContext } from '../../routes/authStateProvider/authContext';

import './AuthPage.css';

export default function AuthPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div className="auth-page">
      <AuthForm
        onSubmit={handleFormSubmit}
      >
        <AuthField
          inputId="auth-email"
          icon={faEnvelope}
          type="text"
          placeholder="Почта"
          value={formData.email}
          isInvalid={!formData.email && triedToSubmit}
          validationMessage="Пожалуйста, введите почту"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <AuthField
          inputId="auth-password"
          icon={faKey}
          type="password"
          placeholder="Пароль"
          value={formData.password}
          isInvalid={!formData.password && triedToSubmit}
          validationMessage="Пожалуйста, введите пароль"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </AuthForm>
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
