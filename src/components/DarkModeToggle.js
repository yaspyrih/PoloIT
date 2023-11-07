import React, { useState } from 'react';
import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
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
        <MdDarkMode alt="Dark Mode" />
      ) : (
        <BsSun alt="Light Mode" />
      )}
    </button>
  );
}

export default DarkModeToggle;
