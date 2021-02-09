import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

const modalRoutes = [
  {
    path: '/modal',
    label: 'Modal',
    icon: faWindowMaximize,
    component: Modal,
  },
];

export default modalRoutes;
