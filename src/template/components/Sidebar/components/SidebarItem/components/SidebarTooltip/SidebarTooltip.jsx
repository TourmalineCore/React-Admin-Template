export default function SidebarTooltip({
  sidebarItemRef,
  sidebarContainerRef,
  content,
}) {
  const sidebarRect = sidebarContainerRef.current.getBoundingClientRect();
  const itemRect = sidebarItemRef.current.getBoundingClientRect();

  const top = itemRect.top - sidebarRect.top;
  const { height } = itemRect;

  return (
    <div className="sidebar-tooltip" style={{ top, height }}>{content}</div>
  );
}
