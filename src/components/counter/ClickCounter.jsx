import React from "react";
import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const incrementBy = () => setCount((count) => count + 1);

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton onClickAction={incrementBy} label="Increment" />
    </div>
  );
}
