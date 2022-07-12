import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { faCog } from '@fortawesome/free-solid-svg-icons';

import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarSettingsMenu from './SidebarSettingsMenu/SidebarSettingsMenu';

export default function SidebarSettingsControl({
  portalTarget,
}) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const containerRef = useRef();
  const dropdownRef = useRef();

  useEffect(
    () => {
      const listener = (event) => {
        if (
          !containerRef.current
          || !dropdownRef.current
          || containerRef.current.contains(event.target)
          || dropdownRef.current.contains(event.target)
        ) {
          return;
        }

        setMenuOpened(false);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [],
  );

  return (
    <>
      <SidebarItem
        itemRef={containerRef}
        tagName="button"
        className="sidebar-settings-control"
        type="button"
        icon={faCog}
        label="Settings"
        onItemClick={() => setMenuOpened(!isMenuOpened)}
      />

      {isMenuOpened && ReactDOM.createPortal(
        <div ref={dropdownRef} className="sidebar-settings-control__dropdown">
          <SidebarSettingsMenu
            portalTarget={portalTarget}
          />
        </div>,
        portalTarget,
      )}
    </>
  );
}
