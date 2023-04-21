import React from "react";

const Project = ({ category, gitHub, img, title, url }) => {
  return (
    <article>
      <a href={url} target="_blank">
        {title}
      </a>
    </article>
  );
};

export default Project;
