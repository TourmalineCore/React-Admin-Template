import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import React from 'react';
import { createBrowserHistory } from 'history';
import AuthPage from './features/auth/AuthPage';
import LogoutPage from './features/logout/LogoutPage';
import Template from './template/Template';

import withPrivateRoute from './routes/authStateProvider/withPrivateRoute';

const TemplateWrapped = withPrivateRoute(Template);

export default function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route path="/">
          <TemplateWrapped />
        </Route>
      </Switch>
    </Router>
  );
}
