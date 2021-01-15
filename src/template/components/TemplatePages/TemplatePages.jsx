import { Route, Switch } from 'react-router-dom';

export default function TemplatePages({
  routes = [],
}) {
  return (
    <Switch>
      {flattenRoutes(routes)}
    </Switch>
  );
}

function flattenRoutes(routes) {
  return routes
    .map((route) => {
      const nestedRoutes = route.nestedItems && route.nestedItems.length
        ? flattenRoutes(route.nestedItems)
        : [];

      return [
        ...nestedRoutes,
        <Route
          key={route.id || route.path}
          exact
          path={route.path}
          render={(props) => (
            <route.component
              {...props}
            />
          )}
        />,
      ];
    })
    .flat();
}
