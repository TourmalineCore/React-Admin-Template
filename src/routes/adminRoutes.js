import homeRoutes from '../features/home/routes';
import profileRoutes from '../features/profile/routes';
import calendarRoutes from '../features/calendar/routes';
import analyticsRoutes from '../features/analytics/routes';
import usersRoutes from '../features/users/routes';
import systemPreferencesRoutes from '../features/systemPreferences/routes';
import uikitRoutes from '../features/uikit/routes';
import tableRoutes from '../features/table/routes';
import modalExampleRoutes from '../features/modal/routes';

export const adminRoutes = [
  ...homeRoutes,
  ...profileRoutes,
  ...calendarRoutes,
  ...analyticsRoutes,
  ...usersRoutes,
  ...systemPreferencesRoutes,
  ...uikitRoutes,
  ...tableRoutes,
  ...modalExampleRoutes,
];
