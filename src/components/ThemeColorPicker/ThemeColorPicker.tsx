import { useContext } from 'react';
import { ThemeContext, THEME_COLOR_LS_KEY } from '../../theme/themeContext';
import { setLSItem } from '../../common/utils/localStorageHelpers';

function ThemeColorPicker() {
  const { setThemeColor, themeColors } = useContext(ThemeContext);

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
          onClick={() => {
            setThemeColor(color.key);
            setLSItem(THEME_COLOR_LS_KEY, color.key);
          }}
        />
      ))}
    </div>
  );
}

export default ThemeColorPicker;
