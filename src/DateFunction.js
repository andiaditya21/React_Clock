import React, { useState, useEffect } from "react";

export default function DateFunction(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <>
      <h1>Date Function</h1>
      <p>{date.toLocaleDateString()}</p>
    </>
  );
}
