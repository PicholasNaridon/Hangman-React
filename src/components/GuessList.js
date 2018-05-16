import React, { Component } from 'react';

class GuessList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guesses: []
        }
    }

    render() {
        return (
            <div className="guesses">
                <h3>Guesses </h3>
                <div className="guessedLetters">{this.props.currentGuessList.join(", ").toUpperCase()}</div>
            </div>
        );
    }
}

export default GuessList;