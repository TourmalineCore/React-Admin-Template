import { faIdCard } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile';

const profileRoutes = [
  {
    path: '/profile',
    label: 'Profile',
    icon: faIdCard,
    component: Profile,
  },
];

export default profileRoutes;
