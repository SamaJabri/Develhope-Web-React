import { useState, useCallback } from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incrementCounter = useCallback(
    () => setCount((value) => value + 1),
    []
  );

  const decrementCounter = useCallback(
    () => setCount((value) => value - 1),
    []
  );
  
  const resetCounter = useCallback(
    () => setCount(initialValue),
    [initialValue]
  );

  return {
    count,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
}
