import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";

const ThemeApp = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#1e1e1e",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease"
      }}
    >
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div style={{ display: "flex", gap: "20px" }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
};

export default ThemeApp;
