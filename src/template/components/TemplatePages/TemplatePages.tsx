import { Route, Routes } from 'react-router-dom';

function TemplatePages({
  routes = [],
}: {
  routes: {
    path: string;
    breadcrumb: any;
    Component: () => JSX.Element;
  }[];
}) {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  );
}

export default TemplatePages;
