import "./App.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const INIT_ANIMAL = {
    id: nanoid(),
    type: null,
    journeysNo: 0,
    isHere: false,
  };

  const [animal, setAnimal] = useState(INIT_ANIMAL);

  const updateType = (e) => {
    e.preventDefault();

    const { type } = e.currentTarget.elements;

    setAnimal({ ...animal, type: type.value });

    e.currentTarget.reset();
  };

  const toggleIsHere = () => {
    console.log(animal.journeysNo);
    setAnimal((animal) => ({
      ...animal,
      isHere: !animal.isHere,
      journeysNo: animal.isHere ? animal.journeysNo - 1 : animal.journeysNo + 1,
    }));
  };

  /*   const incrementJourneyNum = () => setAnimal((animal) => ({
    ...animal,
    journeysNo: animal.journeysNo + 1
  }));

  const decrementJourneyNum = () => setAnimal((animal) => ({
    ...animal,
    journeysNo: animal.journeysNo - 1
  })); */

  return (
    <div className="App">
      <form onSubmit={updateType}>
        <input type="text" name="type" />
        <button type="submit">Save</button>
      </form>

      <button onClick={toggleIsHere}>
        {animal.isHere ? "Return from Journey" : "Go on Journey"}
      </button>

      <div>
        <h2>Type: {animal.type}</h2>
        <p>Journey: {animal.journeysNo} </p>
        <p>In forest: {animal.isHere}</p>
      </div>
    </div>
  );
}

export default App;
