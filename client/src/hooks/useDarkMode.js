import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const darkModeQuery = "{prefer-color-scheme: dark}";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(darkModeQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleOnQuery = () => {};

    mediaQuery.addEventListener("change", handleOnQuery);
  }, []);

  return (
    //
    <div>useDarkMode</div>
  );
};

export default useDarkMode;
