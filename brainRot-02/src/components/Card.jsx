import React, { useEffect, useState } from "react";
import {
  FaBeer,
  FaCoffee,
  FaApple,
  FaReact,
  FaNode,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Card = () => {
  const icons = [
    <FaBeer key="beer" className="size-6" />,
    <FaCoffee key="coffee" className="size-6" />,
    <FaApple key="apple" className="size-6" />,
    <FaReact key="react" className="size-6" />,
  ];

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="bg-background relative isolate flex h-screen items-center justify-center text-xl [--pattern-fg:var(--color-neutral-950)]/5 selection:bg-neutral-700 selection:text-neutral-300 dark:bg-neutral-900 dark:[--pattern-fg:var(--color-neutral-500)]/5">
      <div
        onClick={toggleTheme}
        className="absolute top-6 right-6 cursor-pointer rounded-full bg-neutral-800 p-2 dark:bg-neutral-100"
      >
        {isDark ? (
          <FaSun className="size-4 text-amber-500" />
        ) : (
          <FaMoon className="size-4 text-white" />
        )}
      </div>
      <GridPattern />
      <div className="relative h-90 w-70 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
        <div className="relative isolate mask-t-from-50% mask-r-from-50% mask-b-from-50% mask-l-from-50%">
          <Pattern />
          <div className="animate-marquee flex h-40 items-center justify-center gap-2">
            {icons.map((item, idx) => (
              <div
                key={idx}
                className="flex size-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-sm font-bold text-neutral-600 dark:text-neutral-400">
            Analyze. Build. Conquer
          </h2>
          <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            autem molestiae quo natus ea exercitationem labore temporibus
            ducimus aliquam eligendi repudiandae at perspiciatis rerum cumque,
            sunt eveniet possimus quam repellat quas! Neque, adipisci a.
          </p>
        </div>
      </div>
    </div>
  );
};

//Generate a Pattern
const Pattern = () => (
  <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
);

const GridPattern = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[40px_40px] bg-fixed"></div>
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(180deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[40px_40px] bg-fixed"></div>
    </>
  );
};

export default Card;
