import { useState } from 'react';
import clsx from 'clsx';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/Sidebar/Sidebar';
import SidebarItem from './components/Sidebar/SidebarItem/SidebarItem';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MobileControlsPanel from './components/MobileControlsPanel/MobileControlsPanel';
import Copyright from './components/Copyright/Copyright';
import TemplatePages from './components/TemplatePages/TemplatePages';

import { useRoutes } from './hooks/useRoutes';
import { useBreadcrumbs } from './hooks/useBreadcrumbs';
import { adminRoutes } from '../routes/adminRoutes';

import './Template.css';

export default function Template({
  location,
}) {
  const routes = useRoutes(adminRoutes, location);
  const breadcrumbs = useBreadcrumbs(routes, location.pathname);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpened, setIsMobileSidebarOpened] = useState(false);

  const prevBreadcrumbPath = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2].path : null;

  return (
    <>
      <div
        className={clsx('template', {
          'template--sidebar-collapsed': isSidebarCollapsed,
        })}
      >
        <div className="template__sidebar">
          <Sidebar
            infoBoxData={{}}
            menuData={routes}
            defaultIsCollapsed={isSidebarCollapsed}
            isMobileOpened={isMobileSidebarOpened}
            onCollapseToggle={(isCollapsed) => setIsSidebarCollapsed(isCollapsed)}
            onOverlayClick={() => setIsMobileSidebarOpened(!isMobileSidebarOpened)}
            renderBottomComponent={() => (
              <SidebarItem
                icon={faSignOutAlt}
                path="/logout"
                label="Sign Out"
              />
            )}
          />
        </div>

        <div className="template__main">
          <div className="template__panel template__panel--top">
            <Breadcrumbs list={breadcrumbs} />
          </div>

          <div className="template__content">
            <TemplatePages routes={routes} />
          </div>

          <div className="template__panel template__panel--bottom">
            <Copyright />
          </div>
        </div>
      </div>

      <MobileControlsPanel
        prevPath={prevBreadcrumbPath}
        isToggled={isMobileSidebarOpened}
        onToggleClick={() => setIsMobileSidebarOpened(!isMobileSidebarOpened)}
      />
    </>
  );
}
