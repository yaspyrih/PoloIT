import React, { useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <button
      className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <img src="dark-icon.svg" alt="Dark Mode" />
      ) : (
        <img src="light-icon.svg" alt="Light Mode" />
      )}
    </button>
  );
}

export default DarkModeToggle;
