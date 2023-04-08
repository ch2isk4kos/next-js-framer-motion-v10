import React from "react";

const Layout = ({ children, className = "" }) => {
  const layout = `w-full h-full inline-block z-0 bg-light p-32 ${className}`;
  return (
    <div className={`${layout}`}>
      {/*  */}
      {children}
    </div>
  );
};

export default Layout;
