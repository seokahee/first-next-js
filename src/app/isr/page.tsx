import React from "react";

const ISR = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const result = await response.json();
  const { fact } = result;
  return <div>{fact}</div>;
};

export default ISR;
