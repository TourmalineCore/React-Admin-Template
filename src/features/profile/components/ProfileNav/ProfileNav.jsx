import { Link } from 'react-router-dom';
import clsx from 'clsx';

import './ProfileNav.css';

const ProfileNav = ({
  tabs,
}) => (
  <div className="profile-nav">
    <ul className="profile-nav__list">
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
        'profilenav__item', {
          'hide-if-desktop': mobileOnly,
        },
      )}
    >
      <Link
        to={href}
        className={clsx('profile-nav__button', {
          'profile-nav__button--active': active,
        })}
        onClick={onClick}
      >
        <span className="profile-nav__icon">
          {icon}
        </span>
        <span className="profile-nav__button-text show-if-tablet">
          {text}
        </span>
      </Link>
    </li>
  );
}

export default ProfileNav;
