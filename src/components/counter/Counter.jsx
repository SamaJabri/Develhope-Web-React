import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter(props) {
  const [count, setCount] = useState(props.intialValue);

  useEffect(() => {
    const increaseCounter = setInterval(
      () => setCount((count) => count + props.incrementBy),
      props.incrementInterval
    );
    return () => clearInterval(increaseCounter);
  });

  return <CounterDisplay count={count} />;
}
