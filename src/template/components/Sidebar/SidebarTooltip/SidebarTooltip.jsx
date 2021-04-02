import './SidebarTooltip.css';

export default function SidebarTooltip({
  itemRef,
  sidebarNodeRef,
  content,
}) {
  const sidebarRect = sidebarNodeRef.current.getBoundingClientRect();
  const itemRect = itemRef.current.getBoundingClientRect();

  const top = itemRect.top - sidebarRect.top;
  const { height } = itemRect;

  return (
    <div className="sidebar-tooltip" style={{ top, height }}>{content}</div>
  );
}
