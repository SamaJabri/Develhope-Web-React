import { useState } from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = () => setCount((value) => value + 1);
  const decrementCounter = () => setCount((value) => value - 1);
  const resetCounter = () => setCount(initialValue);

  return {
    count,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
}
