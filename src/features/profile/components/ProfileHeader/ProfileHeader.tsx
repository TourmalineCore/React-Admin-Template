import { ReactNode } from 'react';

import './ProfileHeader.css';

function ProfileHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="profile-header">{children}</div>
  );
}

export default ProfileHeader;
