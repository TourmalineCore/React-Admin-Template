import { useContext } from 'react';
import { ThemeContext } from '../../theme/themeContext';

import './ThemeColorPicker.css';

function ThemeColorPicker() {
  const themeState = useContext(ThemeContext);

  return (
    <div className="theme-color-picker">
      {themeState!.themeColors.map((color: {
        key: string;
        pickerBtnColor: string;
      }) => (
        <button
          key={color.key}
          type="button"
          className="theme-color-picker__button"
          style={{
            backgroundColor: color.pickerBtnColor,
          }}
          onClick={() => themeState!.setThemeColor(color.key)}
        />
      ))}
    </div>
  );
}

export default ThemeColorPicker;
