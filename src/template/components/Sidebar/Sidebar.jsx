import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';

import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import SidebarInfoBox from './SidebarInfoBox/SidebarInfoBox';
import SidebarItem from './SidebarItem/SidebarItem';

import './Sidebar.css';

const OPENED_DOCUMENT_CLASSNAME = 'is-sidebar-mobile-opened';

export default function BexSidebar({
  style = {},
  className,
  isMobileOpened = false,
  isCollapsed = false,
  menuData = [],
  infoBoxData,
  renderBottomComponent,
  renderTopComponent,
  onCollapseToggle = () => {},
  onOverlayClick = () => {},
  onMenuLinkClick = () => {},
}) {
  const sidebarNodeRef = useRef(null);

  useEffect(() => {
    toggleDocumentClassnameOnOpen(isMobileOpened);
  }, [isMobileOpened]);

  return (
    <div
      ref={sidebarNodeRef}
      style={style}
      className={clsx('sidebar', className, {
        'sidebar--collapsed': isCollapsed,
        'sidebar--mobile-opened': isMobileOpened,
      })}
    >
      <div className="sidebar__overlay" role="presentation" onClick={onOverlayClick} />

      <div className="sidebar__inner">
        <div className="sidebar__top">
          {infoBoxData && (
            <SidebarInfoBox {...infoBoxData} />
          )}

          {renderTopComponent && (
            <div className="sidebar__top-component">
              {renderTopComponent()}
            </div>
          )}

          <button
            type="button"
            className="sidebar__toggler"
            onClick={handleCollapseToggleClick}
          >
            <SidebarItem
              label="Collapse menu"
              icon={isCollapsed ? faAngleDoubleRight : faAngleDoubleLeft}
            />
          </button>
        </div>

        <div className="sidebar__navlist">
          {renderMenu()}
        </div>

        {renderBottomComponent && (
          <div className="sidebar__bottom">
            {renderBottomComponent({
              portalTarget: sidebarNodeRef.current,
            })}
          </div>
        )}
      </div>
    </div>
  );

  function handleCollapseToggleClick(e) {
    onCollapseToggle();
    e.currentTarget.blur();
  }

  function renderMenu() {
    return (
      <ul className="sidebar__navsection">
        {menuData.map((menuItem) => renderMenuItem(menuItem))}
      </ul>
    );
  }

  function renderMenuItem(item) {
    return (
      <li key={item.id || item.path} className="sidebar__navitem">
        <SidebarItem
          {...item}
          sidebarNodeRef={sidebarNodeRef}
          isSidebarCollapsed={isCollapsed}
          onItemClick={onMenuLinkClick}
        />
      </li>
    );
  }

  function toggleDocumentClassnameOnOpen(isOpened) {
    if (isOpened) {
      document.documentElement.classList.add(OPENED_DOCUMENT_CLASSNAME);
    } else {
      document.documentElement.classList.remove(OPENED_DOCUMENT_CLASSNAME);
    }
  }
}
