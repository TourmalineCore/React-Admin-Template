import { useContext } from 'react';

import { ThemeContext } from '../../theme/themeContext';

export default function ThemeColorPicker() {
  const { themeColors, setThemeColor } = useContext(ThemeContext);

  return (
    <div className="theme-color-picker">
      {themeColors.map((color) => (
        <button
          key={color.key}
          type="button"
          className="theme-color-picker__button"
          style={{
            backgroundColor: color.pickerBtnColor,
          }}
          onClick={() => setThemeColor(color.key)}
        />
      ))}
    </div>
  );
}
