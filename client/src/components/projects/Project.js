import React from "react";

const Project = ({ category, gitHub, img, title, url }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

export default Project;
