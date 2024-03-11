import React from "react";

const SSR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const result = await response.json();
  const { fact } = result;
  return <div>{fact}</div>;
};

export default SSR;
