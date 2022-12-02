import React, { Component } from "react";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <TodoList
        render={(items, deleteFunction) => (
          <ul>
            {items.map((item) => (
              <div>
                <li>{item}</li>
                <button onClick={() => deleteFunction(item)}>x</button>
              </div>
            ))}
          </ul>
        )}
      />
    );
  }
}
