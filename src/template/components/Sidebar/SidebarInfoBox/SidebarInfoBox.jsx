import './SidebarInfoBox.css';

export default function SidebarInfoBox({
  photoUrl,
  name = 'Nameless User',
  email = 'email@email.com',
}) {
  return (
    <div className="sidebar-infobox">
      <div className="sidebar-infobox__image">
        {
          photoUrl
            ? <img src="" alt="" />
            : <span className="sidebar-infobox__placeholder">{name[0]}</span>
        }
      </div>
      <div className="sidebar-infobox__col">
        <div className="sidebar-infobox__name">{name}</div>
        <div className="sidebar-infobox__email">{email}</div>
      </div>
    </div>
  );
}
