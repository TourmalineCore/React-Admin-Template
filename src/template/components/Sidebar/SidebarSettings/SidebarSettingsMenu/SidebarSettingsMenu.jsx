import './SidebarSettingsMenu.css';

import TemplateColorPicker from '../../../../../components/TemplateColorPicker/TemplateColorPicker';

export default function SettingsMenu() {
  return (
    <div className="sidebar-settings-menu">
      <div className="sidebar-settings-menu__item">
        <div className="sidebar-settings-menu__title">Colors</div>
        <TemplateColorPicker />
      </div>
    </div>
  );
}
