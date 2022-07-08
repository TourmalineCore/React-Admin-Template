import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SidebarRoutes = {
  path: string;
  label: string;
  icon: IconProp;
  routes?: {
    path: string;
    label: string;
    iconMini: IconProp;
  }[];
};
