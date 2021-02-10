import homeRoutes from '../features/home/routes';
import nestedPagesRoutes from '../features/nested/routes';
import inputsRoutes from '../features/inputs/routes';
import tableRoutes from '../features/table/routes';
import modalRoutes from '../features/modal/routes';

export const adminRoutes = [
  ...homeRoutes,
  ...nestedPagesRoutes,
  ...inputsRoutes,
  ...tableRoutes,
  ...modalRoutes,
];
