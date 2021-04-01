import { createContext, useState } from 'react';

import { themeColors } from './themeColors';

const ThemeContext = createContext();

function ThemeProvider({
  initialColor = themeColors[0].key,
  children,
}) {
  const [themeColor, setThemeColor] = useState(initialColor);

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        themeColors,
        setThemeColor,
      }}
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
