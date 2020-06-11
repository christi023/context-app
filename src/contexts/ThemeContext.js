import React, { createContext } from 'react';
// hooks
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  // toggle method for switching isDarkMode in App Title
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
