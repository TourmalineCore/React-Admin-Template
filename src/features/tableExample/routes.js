import { faHome } from '@fortawesome/free-solid-svg-icons';

import tableExample from './tableExample';

const tableExampleRoutes = [
  {
    path: '/tableExample',
    label: 'Table Example',
    icon: faHome,
    component: tableExample,
  },
];

export default tableExampleRoutes;
