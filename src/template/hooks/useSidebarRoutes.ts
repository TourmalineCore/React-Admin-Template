import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Location } from 'history';
import { useState, useEffect } from 'react';
import { SidebarRoutes } from '../../routes/types/SidebarRoutes';

type MenuDataProps = {
  iconMini: IconProp;
  isActive?: boolean;
  isNestedRoutesCollapsed?: boolean;
  label: string;
  path: string;
  routes?: {
    iconMini: IconProp;
    isActive: boolean;
    isNestedRoutesCollapsed: boolean;
    label: string;
    path: string;
  }[],
};

export function useSidebarRoutes(initialRoutes: SidebarRoutes[], location: Location) {
  const [routes, setRoutes] = useState(adaptRoutesByLocation({ routes: initialRoutes, location }));

  useEffect(() => {
    setRoutes((prevRoutesState) => adaptRoutesByLocation({ routes: prevRoutesState, location }));
  }, [location]);

  return routes;
}

function adaptRoutesByLocation({ routes = [], location }: { routes: any[] | SidebarRoutes[], location: Location }): MenuDataProps[] {
  return routes.map((route) => ({
    ...route,
    isActive: isRouteActive(route.path, location),
    isNestedRoutesCollapsed: getItemCollapsedState({ nestedRoutes: route.routes, location }),
    routes: adaptRoutesByLocation({ routes: route.routes, location }),
  }));
}

function isRouteActive(routePath: string, location: Location) {
  return location.pathname.endsWith(routePath) || location.pathname.includes(`${routePath}/`);
}

function getItemCollapsedState({ nestedRoutes = [], location }: { nestedRoutes: SidebarRoutes[], location: Location }) {
  return !nestedRoutes.some((item) => location.pathname.includes(item.path));
}
