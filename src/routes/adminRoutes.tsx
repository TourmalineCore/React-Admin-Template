import { homeRoutes, homeSidebarRoutes } from '../features/home/routes';
import { profileRoutes, profileSidebarRoutes } from '../features/profile/routes';
import { nestedPagesRoutes, nestedPagesSidebarRoutes } from '../features/nested/routes';
import { inputsRoutes, inputsSidebarRoutes } from '../features/inputs/routes';
import { tableRoutes, tableSidebarRoutes } from '../features/table/routes';
import { modalRoutes, modalSidebarRoutes } from '../features/modal/routes';
import { SidebarRoutes } from './types/SidebarRoutes';

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

export const sidebarRoutes: SidebarRoutes[] = [
  ...homeSidebarRoutes,
  ...profileSidebarRoutes,
  ...nestedPagesSidebarRoutes,
  ...inputsSidebarRoutes,
  ...tableSidebarRoutes,
  ...modalSidebarRoutes,
];
