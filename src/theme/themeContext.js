import { createContext, useState, useMemo } from 'react';

import { themeColors } from './themeColors';

const ThemeContext = createContext();

function ThemeProvider({
  initialColor = themeColors[0].key,
  children,
}) {
  const [themeColor, setThemeColor] = useState(initialColor);

  const value = useMemo(() => ({
    themeColor,
    themeColors,
    setThemeColor,
  }));

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
};
