import React from "react";

const Article = ({ description, img, medium, title, url }) => {
  return (
    <article className={root}>
      {/* <Link className={imageLink} href={url} target="_blank">
        <Image className={image} src={framer} alt={title} />
      </Link> */}
      <div className={articleInfo}>
        <h2 className={h2}>{title}</h2>
        <p className={preview}>{description}</p>
        <div className={links}>
          {/* <Link href={medium} target="_blank">
            <p>Medium</p>
          </Link> */}
          {/* <Link href={url} target="_blank">
            <p className={articleLink}>Read More</p>
          </Link> */}
        </div>
      </div>
    </article>
  );
};

export default Article;
