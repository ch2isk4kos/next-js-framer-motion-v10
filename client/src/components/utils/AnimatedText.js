import React from "react";

const AnimatedText = ({ className = "", text }) => {
  const textWrapperStyles = `
    w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
  `;
  const textStyles = `${className}`;
  const spanStyles = `inline-block`;

  return (
    <div className={textWrapperStyles}>
      <h1 className={textStyles}>
        {text.split(" ").map((char, index) => (
          <span className={spanStyles} key={`${char}-${index}`}>
            {char}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
