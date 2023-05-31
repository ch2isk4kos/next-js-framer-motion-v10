import React from "react";

const Layout = ({ children, className = "" }) => {
  const root = `w-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`;
  return (
    <div className={root}>
      {/*  */}
      {children}
    </div>
  );
};

export default Layout;
