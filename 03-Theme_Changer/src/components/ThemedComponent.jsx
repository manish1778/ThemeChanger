import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import './ThemedComponent.css';
import ThemeSwitcher from './ThemeSwitcher';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <h1>Switch the theme</h1>
      <ThemeSwitcher toggleTheme={toggleTheme}/>
    </div>
  );
}

export default Theme;
