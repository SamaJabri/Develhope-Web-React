import React, { Component } from "react";
import CarDetails from "./components/CarDetails";

export default class App extends Component {

  initialData = {
    model: 'BMW',
    year: '2019',
    color: '#643A3A'
  }

  render() {
    return <CarDetails initialData={this.initialData}  />;
  }
}
