import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '@tourmalinecore/react-tc-ui-kit';
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
        <Input
          id="login"
          className="auth-page__input"
          type="text"
          label="Login"
          value={formData.email}
          isInvalid={!formData.email && triedToSubmit}
          validationMessages={['Email should be filled']}
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
