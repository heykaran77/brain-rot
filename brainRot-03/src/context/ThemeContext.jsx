import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selectedTheme) => {
      if (selectedTheme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else if (selectedTheme === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(systemTheme === "dark" ? "dark" : "light");
        root.classList.remove(systemTheme === "dark" ? "light" : "dark");
      }
    };

    applyTheme(theme);

    const handleSystemChange = (e) => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    localStorage.setItem("theme", theme);
    // if (theme === "system") {
    //   localStorage.removeItem("theme");
    // } else {
    //   localStorage.setItem("theme", theme);
    // }
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
