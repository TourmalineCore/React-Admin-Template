import { useState } from 'react';

import { useParams } from 'react-router-dom';
import ContentCard from '../../components/ContentCard/ContentCard';
import ActionsBlock from '../../components/ActionsBlock/ActionsBlock';

import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import ProfileNav from './components/ProfileNav/ProfileNav';
import getProfileAvailableActionButtons from './profileActionsFactory';

import { profileModes } from './profileModes';
import { profileSections, profileTabs } from './profileTabs';

export default function ProfilePage() {
  const [profileMode, setProfileMode] = useState(profileModes.VIEW);

  const params = useParams();

  const activeTabKey = params.tabId || profileSections.SUMMARY;
  const ActiveTab = profileTabs[activeTabKey].component;

  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <ProfileHeader>
          <ProfileNav
            profileMode={profileMode}
            tabs={
              Object.entries(profileTabs)
                .filter(([, profileTab]) => !profileTab.isHidden)
                .map(([profileTabKey, profileTab]) => ({
                  key: profileTabKey,
                  href: profileTab.link,
                  text: profileTab.tabLabel,
                  icon: profileTab.tabIcon,
                  active: profileTab.id === activeTabKey,
                  onClick: () => {},
                }))
            }
          />

          {profileTabs[activeTabKey].showActions && (
            <ActionsBlock
              isLoading={false}
              availableActions={getProfileAvailableActionButtons({
                profileTab: profileTabs[activeTabKey],
                profileMode,
                setEditMode: () => setProfileMode(profileModes.EDIT),
                exitWithoutSave: () => setProfileMode(profileModes.VIEW),
                saveDataAndExit: () => setProfileMode(profileModes.VIEW),
                saveDisabled: false,
              })}
            />
          )}
        </ProfileHeader>
      )}
    >
      <div style={{ height: 2000, backgroundColor: '#f8fcff' }}>
        <br />
        <ActiveTab />
        <br />
        mode:
        {' '}
        {profileMode}
      </div>
    </ContentCard>
  );
}
