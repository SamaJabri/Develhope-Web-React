import React, { Component } from "react";
import FilteredList from "./components/FilteredList";

export default class App extends Component {
  state = {
    dataList: [
      {
        id: 1,
        name: "Alvaro",
        age: 16,
      },
      {
        id: 2,
        name: "Sean",
        age: 32,
      },
      {
        id: 3,
        name: "Mozart",
        age: 60,
      },
    ],
  };

  render() {
    return <FilteredList dataList={this.state.dataList} />;
  }
}
