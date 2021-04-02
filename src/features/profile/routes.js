import { faUser } from '@fortawesome/free-solid-svg-icons';

import ProfilePage from './ProfilePage';

export const profileRoutes = [
  {
    path: '/profile',
    breadcrumb: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/profile/:tabId',
    breadcrumb: (props) => props.match.params.tabId,
    component: ProfilePage,
  },
];

export const profileSidebarRoutes = [
  {
    path: '/profile',
    label: 'Profile',
    icon: faUser,
  },
];
