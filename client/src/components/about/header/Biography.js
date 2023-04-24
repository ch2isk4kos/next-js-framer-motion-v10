import React from "react";

const h2 = `text-lg font-bold uppercase text-dark/75`;
const pg = `my-1 font-medium`;

const Biography = () => {
  const paragraphs = [
    {
      id: "0",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "1",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "2",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
    {
      id: "3",
      text: "blah blah blah blah. blah blah blah blah. blah blah blah blah. blah blah blah blah.",
    },
  ];

  return (
    <>
      <h2 className={h2}>Biography </h2>
      {paragraphs.map((paragraph) => (
        <p className={pg} key={paragraph.id}>
          {paragraph.text}
        </p>
      ))}
    </>
  );
};

export default Biography;
