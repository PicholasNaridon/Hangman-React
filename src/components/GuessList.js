import React, { Component } from 'react';

class GuessList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="guesses">
                <div className="guessedLetters">{this.props.currentGuessList.join(", ").toUpperCase()}</div>
            </div>
        );
    }
}

export default GuessList;