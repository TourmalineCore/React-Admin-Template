import { useState } from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import clsx from 'clsx';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './components/Sidebar/Sidebar';
import SidebarItem from './components/Sidebar/SidebarItem/SidebarItem';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import MobileControlsPanel from './components/MobileControlsPanel/MobileControlsPanel';
import Copyright from './components/Copyright/Copyright';
import TemplatePages from './components/TemplatePages/TemplatePages';

import { useSidebarRoutes } from './hooks/useSidebarRoutes';

import { adminRoutes, sidebarRoutes } from '../routes/adminRoutes';

import './Template.css';

export default function Template({
  location,
}) {
  const parsedSidebarRoutes = useSidebarRoutes(sidebarRoutes, location);
  const breadcrumbs = useBreadcrumbs(adminRoutes, { excludePaths: ['/'] });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpened, setIsMobileSidebarOpened] = useState(false);

  const prevBreadcrumbPath = breadcrumbs.length > 1
    ? breadcrumbs[breadcrumbs.length - 2].breadcrumb.key
    : null;

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
            menuData={parsedSidebarRoutes}
            defaultIsCollapsed={isSidebarCollapsed}
            isMobileOpened={isMobileSidebarOpened}
            onCollapseToggle={(isCollapsed) => setIsSidebarCollapsed(isCollapsed)}
            onOverlayClick={() => setIsMobileSidebarOpened(!isMobileSidebarOpened)}
            onMenuLinkClick={() => setIsMobileSidebarOpened(!isMobileSidebarOpened)}
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
            <TemplatePages routes={adminRoutes} />
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
