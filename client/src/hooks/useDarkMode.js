import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("");
  const darkModeQuery = "{prefer-color-scheme: dark}";

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkModeQuery);
    const userPreference = window.localStorage.getItem("theme");
    let checkPreference;

    const handleOnQuery = () => {
      if (userPreference) {
        checkPreference = userPreference === "dark" ? "dark" : "light";
        setMode(checkPreference);
        if (checkPreference === "dark")
          document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      } else {
        checkPreference = mediaQuery.matches ? "dark" : "light";
        setMode(checkPreference);
        if (checkPreference === "dark")
          document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleOnQuery);
    return () => mediaQuery.removeEventListener("change", handleOnQuery);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    //
    <div>useDarkMode</div>
  );
};

export default useDarkMode;
