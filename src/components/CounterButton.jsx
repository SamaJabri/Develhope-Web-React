import React, { Component } from 'react'

export default class CounterButton extends Component {
  render() {
    return (
        <button onClick = {this.props.onClickAction}>{this.props.label}</button>
    )
  }
}
