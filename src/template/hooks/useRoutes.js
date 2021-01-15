import { useState, useEffect } from 'react';

export function useRoutes(initialRoutes, location) {
  const [routes, setRoutes] = useState(adaptRoutesByLocation(initialRoutes, location));

  useEffect(() => {
    setRoutes(adaptRoutesByLocation(routes, location));
  }, [location]);

  return routes;
}

function adaptRoutesByLocation(routes = [], location) {
  return routes.map((route) => ({
    ...route,
    isActive: isRouteActive(route.path, location),
    isNestedItemsCollapsed: getItemCollapsedState(route.nestedItems, location),
    nestedItems: adaptRoutesByLocation(route.nestedItems, location),
  }));
}

function isRouteActive(routePath, location) {
  return location.pathname.endsWith(routePath) || location.pathname.includes(`${routePath}/`);
}

function getItemCollapsedState(nestedItems = [], location) {
  return !nestedItems.some((item) => location.pathname.includes(item.path));
}
