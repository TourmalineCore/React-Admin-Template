import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const profileSections = {
  SUMMARY: 'summary',
  PERSONAL: 'personal',
};

export const profileTabs = {
  [profileSections.SUMMARY]: {
    id: profileSections.SUMMARY,
    link: `/profile/${profileSections.SUMMARY}`,
    tabLabel: profileSections.SUMMARY,
    tabIcon: <FontAwesomeIcon icon={faUser} className="fa-icon" />,
    component: () => 'summary tab',
    editable: true,
    showActions: true,
  },

  [profileSections.PERSONAL]: {
    id: profileSections.PERSONAL,
    link: `/profile/${profileSections.PERSONAL}`,
    tabLabel: profileSections.PERSONAL,
    tabIcon: <FontAwesomeIcon icon={faClipboardList} className="fa-icon" />,
    component: () => 'personal tab',
    editable: false,
  },
};
