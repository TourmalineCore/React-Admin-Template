import homeRoutes from '../features/home/routes';
import profileRoutes from '../features/profile/routes';
import calendarRoutes from '../features/calendar/routes';
import analyticsRoutes from '../features/analytics/routes';
import usersRoutes from '../features/users/routes';
import systemPreferencesRoutes from '../features/systemPreferences/routes';

export const adminRoutes = [
  ...homeRoutes,
  ...profileRoutes,
  ...calendarRoutes,
  ...analyticsRoutes,
  ...usersRoutes,
  ...systemPreferencesRoutes,
];
