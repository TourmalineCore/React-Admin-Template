import {
  faCalendarAlt,
  faCalendarPlus,
  faCalendarMinus,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';

import Calendar from './Calendar';
import CurrentCalendar from './components/CurrentCalendar';
import NextCalendar from './components/NextCalendar';
import LongCalendar from './components/LongCalendar';

const calendarRoutes = [
  {
    path: '/calendar',
    label: 'Calendar',
    icon: faCalendarAlt,
    component: Calendar,
    nestedItems: [
      {
        path: '/calendar/current-year-calendar',
        label: 'Current Year Calendar',
        iconMini: faCalendarPlus,
        component: CurrentCalendar,
      },
      {
        path: '/calendar/next-year-calendar',
        label: 'Next Year Calendar',
        iconMini: faCalendarMinus,
        component: NextCalendar,
      },
      {
        path: '/calendar/very-big-calendar',
        label: 'Very Very Very Long Calendar Label',
        iconMini: faCalendarWeek,
        component: LongCalendar,
      },
    ],
  },
];

export default calendarRoutes;
