import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    item: "",
    items: ["Hello"],
  };

  handleItemsAddition = (e) =>
    this.setState({ item: "", items: [...this.state.items, this.state.item] });

  render() {
    return (
      <div>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={(e) => this.setState({ item: e.target.value })}
        />
        <button onClick={this.handleItemsAddition}>Add</button>

        <ul>
          {this.state.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
