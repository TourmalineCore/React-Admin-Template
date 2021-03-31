import React from 'react';

// import { Link } from 'react-router-dom';

import './SidebarSettingsMenu.css';

export default function SettingsMenu({
  activeColor,
  handleColorClick,
}) {
  console.log(activeColor, handleColorClick);

  return (
    <div className="sidebar-settings-menu">
      <div className="sidebar-settings-menu__item">
        <div className="sidebar-settings-menu__title">Colors</div>
      </div>

      <div className="sidebar-settings-menu__item">
        <div className="sidebar-settings-menu__title">Language</div>
      </div>
    </div>
  );
}
