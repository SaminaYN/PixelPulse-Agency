import React, { useEffect } from "react";
import assets from "../assets/assets";

const ToggleTheme = ({ theme, setTheme }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full "
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            alt=""
            className="size-8.5 p-1.5 border border-gray-500 rounded-full "
          />
        )}
      </button>
    </>
  );
};

export default ToggleTheme;
