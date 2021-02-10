import {
  faNetworkWired,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';

import NestedPagesRoot from './NestedPagesRoot';
import CardPage from './components/CardPage';

const nestedPagesRoutes = [
  {
    path: '/nested',
    label: 'Nested Pages',
    icon: faNetworkWired,
    component: NestedPagesRoot,
    nestedItems: [
      {
        path: '/nested/card-page',
        label: 'Card Page',
        iconMini: faClipboard,
        component: CardPage,
      },
    ],
  },
];

export default nestedPagesRoutes;
