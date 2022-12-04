import React from "react";
import { useRef, useEffect } from "react";

export default function CarDetails(props) {
  const { model, year, color } = props.initialData;

  const formRef = useRef(model, year, color);

  useEffect(() => {
    formRef.current.model.value = model;
    formRef.current.year.value = year;
    formRef.current.color.value = color;
  }, [model, year, color]);

  return (
    <form ref={formRef}>
      <input type="text" name="model" />
      <input type="text" name="year" />
      <input type="color" name="color" />
    </form>
  );
}
