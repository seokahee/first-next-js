"use client";
import { useEffect, useState } from "react";

const CSR = () => {
  const [catData, setCatData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const result = await response.json();
      console.log("result", result);
      const { fact } = result;
      setCatData(fact);
    };
    fetchData();
  }, []);

  if (!catData) {
    return <div>로딩중입니다</div>;
  }

  return <div>{catData}</div>;
};

export default CSR;
