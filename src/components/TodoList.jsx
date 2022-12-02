import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    item: "",
    items: ["Hello"],
  };

  handleItemsAddition = (e) =>
    this.setState({ item: "", items: [...this.state.items, this.state.item] });

  setStateItem = (item, value) => this.setState({ [item]: value });

  render() {
    return (
      <div>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={(e) => this.setStateItem("item", e.target.value)}
        />
        <button onClick={this.handleItemsAddition}>Add</button>
        <button onClick={() => this.setStateItem("items", [])}>Reset</button>

        <ul>
          {this.state.items.map((item) => (
            <div>
              <li>{item}</li>
              <button
                onClick={() =>
                  this.setStateItem(
                    "items",
                    this.state.items.filter((val) => val !== item)
                  )
                }
              >
                x
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
