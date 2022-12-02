import React from "react";

export default function Sum({ numbers = [1, 2, 3] }) {
  return <h1>{numbers.reduce((a, b) => a + b)}</h1>;
}
