import { faUsers } from '@fortawesome/free-solid-svg-icons';

import Users from './Users';

const usersRoutes = [
  {
    path: '/users',
    label: 'Users',
    icon: faUsers,
    component: Users,
  },
];

export default usersRoutes;
