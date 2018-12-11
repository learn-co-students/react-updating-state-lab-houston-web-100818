import React from 'react';

export class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementTimesClicked = () => {
    this.setState((previousState) => {
      return {timesClicked: previousState.timesClicked + 1}
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
