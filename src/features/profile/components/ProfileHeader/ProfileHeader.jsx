import './ProfileHeader.scss';

export default function ProfileHeader({
  children,
}) {
  return (
    <div className="profile-header">{children}</div>
  );
}
