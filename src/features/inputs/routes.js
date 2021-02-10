import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import InputsPage from './InputsPage';

const inputsRoutes = [
  {
    path: '/inputs',
    label: 'Inputs',
    icon: faKeyboard,
    component: InputsPage,
  },
];

export default inputsRoutes;
