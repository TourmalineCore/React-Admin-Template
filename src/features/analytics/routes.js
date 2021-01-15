import { faChartPie } from '@fortawesome/free-solid-svg-icons';

import Analytics from './Analytics';

const analyticsRoutes = [
  {
    path: '/analytics',
    label: 'Analytics',
    icon: faChartPie,
    component: Analytics,
  },
];

export default analyticsRoutes;
