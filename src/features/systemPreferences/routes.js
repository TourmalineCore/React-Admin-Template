import { faTools } from '@fortawesome/free-solid-svg-icons';

import SystemPreferences from './SystemPreferences';

const systemPreferencesRoutes = [
  {
    path: '/system-preferences',
    label: 'System Preferences',
    icon: faTools,
    component: SystemPreferences,
  },
];

export default systemPreferencesRoutes;
