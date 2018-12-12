// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick} >{this.state.timesClicked}</button>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => {
            timesClicked: this.state.timesClicked++
            return state
        })
        console.log(this.state.timesClicked)
    }
}