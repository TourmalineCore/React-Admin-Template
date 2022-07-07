import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { homeRoutes, homeSidebarRoutes } from '../features/home/routes';
import { profileRoutes, profileSidebarRoutes } from '../features/profile/routes';
import { nestedPagesRoutes, nestedPagesSidebarRoutes } from '../features/nested/routes';
import { inputsRoutes, inputsSidebarRoutes } from '../features/inputs/routes';
import { tableRoutes, tableSidebarRoutes } from '../features/table/routes';
import { modalRoutes, modalSidebarRoutes } from '../features/modal/routes';

export const adminRoutes: {
  path: string;
  breadcrumb: any;
  Component: () => JSX.Element;
}[] = [
  ...homeRoutes,
  ...profileRoutes,
  ...nestedPagesRoutes,
  ...inputsRoutes,
  ...tableRoutes,
  ...modalRoutes,
];

export const sidebarRoutes: {
  path: string;
  label: string;
  icon: IconProp;
  routes?: {
    path: string;
    label: string;
    iconMini: IconProp;
    icon: IconProp;
  }[];
}[] = [
  ...homeSidebarRoutes,
  ...profileSidebarRoutes,
  ...nestedPagesSidebarRoutes,
  ...inputsSidebarRoutes,
  ...tableSidebarRoutes,
  ...modalSidebarRoutes,
];
