import React from "react";
import { useState, useEffect } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

export default function ClickCounter(props) {
  const [count, setCount] = useState(0);

  const incrementBy = () => setCount((count) => count + 1);

  useEffect(() => props.onCounterChange(count), [count]);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton onClickAction={incrementBy} label="Increment" />
    </div>
  );
}
