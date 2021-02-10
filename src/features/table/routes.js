import { faTable } from '@fortawesome/free-solid-svg-icons';

import TablePage from './TablePage';

const tableRoutes = [
  {
    path: '/table',
    label: 'Table',
    icon: faTable,
    component: TablePage,
  },
];

export default tableRoutes;
