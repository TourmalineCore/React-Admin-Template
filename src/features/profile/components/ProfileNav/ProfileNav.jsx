import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './ProfileNav.css';

const ProfileNav = ({
  tabs,
}) => (
  <div className="user-profile__nav">
    <ul className="user-profile__nav-list">
      {
        tabs.map((tab) => (
          <ProfileNavItem {...tab} />
        ))
      }
    </ul>
  </div>
);

function ProfileNavItem({
  text,
  icon,
  href,
  onClick,
  active,
  mobileOnly,
}) {
  return (
    <li
      className={clsx(
        'user-profile__nav-item', {
          'hide-if-desktop': mobileOnly,
        },
      )}
    >
      <Link
        to={href}
        className={clsx('user-profile__nav-button', {
          'user-profile__nav-button--active': active,
        })}
        onClick={onClick}
      >
        <span className="user-profile__nav-icon">
          {icon}
        </span>
        <span className="user-profile__nav-button-text show-if-tablet">
          {text}
        </span>
      </Link>
    </li>
  );
}

export default ProfileNav;
