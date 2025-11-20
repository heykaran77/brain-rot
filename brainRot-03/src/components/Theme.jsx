import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme(mediaQuery.matches ? "light" : "dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 size-8 border border-neutral-200 dark:border-neutral-800 rounded-md flex items-center justify-center cursor-pointer">
      <BsSun className="absolute size-4 shrink-0 text-neutral-500 inset-0 m-auto dark:scale-100 scale-0 transition-all duration-300 rotate-45" />
      <BsMoon className="absolute size-4 shrink-0 text-neutral-500 dark:scale-0 scale-100 inset-0 m-auto transition-all duration-300 dark:rotate-45" />
    </button>
  );
};

export default Theme;
