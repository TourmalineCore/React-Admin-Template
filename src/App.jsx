import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AuthPage from './features/auth/AuthPage';
import LogoutPage from './features/logout/LogoutPage';
import Template from './template/Template';

import withPrivateRoute from './routes/authStateProvider/withPrivateRoute';

const history = createBrowserHistory({ basename: 'React-Admin-Template/' });

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/" component={withPrivateRoute(Template)} />
      </Switch>
    </Router>
  );
}
