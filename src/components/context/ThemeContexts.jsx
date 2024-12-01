// src/components/context/ThemeContexts.jsx
import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);  // For dark/light theme toggle

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);  // Toggle the theme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;  // Default export
