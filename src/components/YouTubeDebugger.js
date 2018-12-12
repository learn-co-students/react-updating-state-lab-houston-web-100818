// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    render() {
        console.log(this.state.settings.video)
        return(
            <div>
                <div>
                    <button className='bitrate' onClick={this.bitClick} >Bitrate</button>
                </div>
                <div>
                    <button className='resolution' onClick={this.rezClick}>resolution</button>
                </div>
            </div>
        )
    }

    bitClick = () => {
        this.setState ((state) => {
            
            state.settings = {
                ...this.state.settings,
                bitrate: 12
            }
            
            return state
        })
        
    }

    rezClick = () => {
        this.setState ((state) => {
            state.settings.video = {
                resolution: '720p'
            }
        })

    }
}