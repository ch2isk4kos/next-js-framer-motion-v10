import React from "react";

const Layout = ({ children, className = "" }) => {
  const root = `w-full max-h-screen inline-block z-0 bg-light p-32 dark:bg-dark ${className}`;
  // const root = `w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`;
  // const root = `w-full min-h-screen inline-block z-0 bg-light p-32 dark:bg-dark ${className}`;
  return (
    <div className={root}>
      {/*  */}
      {children}
    </div>
  );
};

export default Layout;
