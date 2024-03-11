import React from "react";

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const result = await response.json();
  const { fact } = result;

  return <div>{fact}</div>;
};

export default SSG;
