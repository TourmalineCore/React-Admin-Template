import { Route, Switch } from 'react-router-dom';

export default function TemplatePages({
  routes = [],
}) {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.id || route.path}
          path={route.path}
          exact
          render={(props) => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
}
