import React from "react";

export default async function Article() {
  const res = await fetch(``);
  const data = res.json();
  return (
    <div>
      <h1>Article {data._id}</h1>
    </div>
  );
}
