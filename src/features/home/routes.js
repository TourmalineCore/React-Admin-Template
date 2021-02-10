import { faHome } from '@fortawesome/free-solid-svg-icons';

import HomePage from './HomePage';

const homeRoutes = [
  {
    path: '/',
    label: 'Home',
    icon: faHome,
    component: HomePage,
  },
];

export default homeRoutes;
