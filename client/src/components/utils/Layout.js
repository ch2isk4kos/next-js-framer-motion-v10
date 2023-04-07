import React from "react";

const Layout = ({ children, className = "" }) => {
  const containerStyles = `w-full h-full inline-block z-0 bg-light p-32 ${className}`;
  //   const containerStyles = `${className}`;
  return (
    <div className={`${containerStyles}`}>
      {/*  */}
      {children}
    </div>
  );
};

export default Layout;
