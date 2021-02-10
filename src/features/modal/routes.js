import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

import ModalPage from './ModalPage';

const modalRoutes = [
  {
    path: '/modal',
    label: 'Modal',
    icon: faWindowMaximize,
    component: ModalPage,
  },
];

export default modalRoutes;
