import { useState, useEffect } from 'react';

export function useSidebarRoutes(initialRoutes, location) {
  const [routes, setRoutes] = useState(adaptRoutesByLocation({ routes: initialRoutes, location }));

  useEffect(() => {
    setRoutes((prevRoutesState) => adaptRoutesByLocation({ routes: prevRoutesState, location }));
  }, [location]);

  return routes;
}

function adaptRoutesByLocation({ routes = [], location }) {
  return routes.map((route) => ({
    ...route,
    isActive: isRouteActive(route.path, location),
    isNestedRoutesCollapsed: getItemCollapsedState({ nestedRoutes: route.routes, location }),
    routes: adaptRoutesByLocation({ routes: route.routes, location }),
  }));
}

function isRouteActive(routePath, location) {
  return location.pathname.endsWith(routePath) || location.pathname.includes(`${routePath}/`);
}

function getItemCollapsedState({ nestedRoutes = [], location }) {
  return !nestedRoutes.some((item) => location.pathname.includes(item.path));
}
