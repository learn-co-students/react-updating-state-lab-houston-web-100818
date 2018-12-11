import React from "react";
export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
  increment = () => {
    this.setState(state => {
      state.timesClicked += 1;
      return state;
    });
  };
  render() {
    return <button onClick={this.increment}>{this.state.timesClicked}</button>;
  }
}
