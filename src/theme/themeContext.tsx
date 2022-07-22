import {
  createContext, useState, useMemo, ReactNode, Dispatch, SetStateAction, useEffect,
} from 'react';
import { getLSItem } from '../common/utils/localStorageHelpers';

import { themeColors } from './themeColors';

const THEME_COLOR_LS_KEY = 'theme-color';

type ThemProviderStateProps = {
  themeColor: string
  themeColors: ThemeElement[];
  setThemeColor: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemProviderStateProps>({
  themeColor: '',
  themeColors: [],
  setThemeColor: () => '',
});

function ThemeProvider({
  initialColor = themeColors[0].key,
  children,
}: {
  initialColor?: string;
  children: ReactNode;
}) {
  const [themeColor, setThemeColor] = useState(initialColor);

  useEffect(() => {
    const color = getLSItem(THEME_COLOR_LS_KEY);

    if (color) {
      setThemeColor(color);
    }
  }, []);

  const value = useMemo(() => ({
    themeColor,
    themeColors,
    setThemeColor,
  }), [themeColor, themeColors, setThemeColor]);

  return (
    <ThemeContext.Provider
      value={value}
    >
      <div className={`theme-color-${themeColor}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export {
  ThemeProvider,
  ThemeContext,
  THEME_COLOR_LS_KEY,
};
