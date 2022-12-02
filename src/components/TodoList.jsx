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

        {this.props.render(this.state.items, (item) =>
          this.setStateItem(
            "items",
            this.state.items.filter((val) => val !== item)
          )
        )}
      </div>
    );
  }
}
