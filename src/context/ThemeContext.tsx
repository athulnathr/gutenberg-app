import React, { createContext, useContext, useState } from 'react';
import themes from '../styles/theme';
import { ThemeProvider as Provider } from 'styled-components';
const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme: isDarkTheme ? themes.dark : themes.light, toggleTheme }}>
      <Provider theme={isDarkTheme ? themes.dark : themes.light} >
        {children}
      </Provider>
    </ThemeContext.Provider>
  );
};

//edit file test

export const useTheme = () => {
  return useContext(ThemeContext);
};
