import React from 'react'
import "./ThemeSwitcher.css"

const ThemeSwitcher = ({toggleTheme}) => {
  return (
    <div class="switch-container">
        <label class="switch">
          <input type="checkbox" className="theme-toggle-btn" onClick={toggleTheme} />
          <span class="slider"></span>
        </label>
      </div>
  )
}

export default ThemeSwitcher