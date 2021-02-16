
import React, { Component } from 'react'

export default class Gamedtail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }
        console.log(this.props.match.params)
    }

    render() {
        return (
            <div>
                gfdgdf
            </div>
        )
    }
}


