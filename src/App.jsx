import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Counter from "./components/counter/Counter";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Welcome name="Alvaro" />} />
        <Route
          path="/counter"
          element={
            <Counter intialValue={0} incrementBy={1} incrementInterval={1000} />
          }
        />
      </Routes>
    );
  }
}
