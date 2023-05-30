import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("");
  const darkModeQuery = "{prefer-color-scheme: dark}";

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkModeQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleOnQuery = () => {
      if (userPreference) {
        let checkPreference = userPreference === "dark" ? "dark" : "light";
        setMode(checkPreference);
      }
    };

    mediaQuery.addEventListener("change", handleOnQuery);
  }, []);

  return (
    //
    <div>useDarkMode</div>
  );
};

export default useDarkMode;
