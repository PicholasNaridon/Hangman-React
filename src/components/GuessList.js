import React, { Component } from 'react';
import _ from 'lodash'

class GuessList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guesses: [],
            guessesLeft: null
        }
    }

    render() {
        var guessLeft = this.props.currentGuessList
        return (
            <div className="guesses">
                <h3>Already Used: </h3>
                <div>{this.props.currentGuessList.join(", ").toUpperCase()}</div>
            </div>
        );
    }
}

export default GuessList;