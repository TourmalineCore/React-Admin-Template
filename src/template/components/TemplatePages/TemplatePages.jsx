import { Route, Routes } from 'react-router-dom';

export default function TemplatePages({
  routes = [],
}) {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id || route.path}
          path={route.path}
          exact
          element={<route.component {...route.props} />}
        />
      ))}
    </Routes>
  );
}
