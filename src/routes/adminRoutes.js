import { homeRoutes, homeSidebarRoutes } from '../features/home/routes';
import { profileRoutes, profileSidebarRoutes } from '../features/profile/routes';
import { nestedPagesRoutes, nestedPagesSidebarRoutes } from '../features/nested/routes';
import { inputsRoutes, inputsSidebarRoutes } from '../features/inputs/routes';
import { tableRoutes, tableSidebarRoutes } from '../features/table/routes';
import { modalRoutes, modalSidebarRoutes } from '../features/modal/routes';

export const adminRoutes = [
  ...homeRoutes,
  ...profileRoutes,
  ...nestedPagesRoutes,
  ...inputsRoutes,
  ...tableRoutes,
  ...modalRoutes,
];

export const sidebarRoutes = [
  ...homeSidebarRoutes,
  ...profileSidebarRoutes,
  ...nestedPagesSidebarRoutes,
  ...inputsSidebarRoutes,
  ...tableSidebarRoutes,
  ...modalSidebarRoutes,
];
