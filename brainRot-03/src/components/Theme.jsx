import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { MdComputer } from "react-icons/md";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const baseClass =
    "p-2 rounded-md cursor-pointer transition-all duration-300 text-neutral-600 dark:text-neutral-400";
  const activeClass =
    "dark:bg-neutral-600/50 bg-neutral-400/50 dark:text-neutral-200 text-neutral-900";
  return (
    <div className="fixed top-5 right-5 p-1 border border-neutral-200 dark:border-neutral-600 rounded-md flex items-center justify-center">
      <button
        onClick={() => setTheme("light")}
        className={`${baseClass} ${
          theme === "light"
            ? activeClass
            : " hover:bg-neutral-200 dark:hover:bg-neutral-700/50"
        }`}>
        <BsSun className="size-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${baseClass} ${
          theme === "dark"
            ? activeClass
            : "hover:bg-neutral-200 dark:hover:bg-neutral-700/50"
        }`}>
        <BsMoon className="size-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`${baseClass} ${
          theme === "system"
            ? activeClass
            : "hover:bg-neutral-200 dark:hover:bg-neutral-700/50"
        }`}>
        <MdComputer className="size-4" />
      </button>
    </div>
  );
};

export default Theme;
