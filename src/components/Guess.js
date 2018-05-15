import React, { Component } from 'react';
import _ from "lodash"
import "../styles/Guess.css"


class Guess extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentGuess: '',
        }
        this.handleGuess = this.handleGuess.bind(this)
    }
    handleGuess(e){
        console.log(e.target.value)
        var guess = e.target.value
        this.props.submitGuess(guess)
        this.setState({
            currentGuess: ''
        })
    }


    render() {
        var guessLeft = this.props.theLetters.length - this.props.currentGuessList.length
        var word = this.props.theLetters.join("")
        if (guessLeft > 0){
            return (
                <div>
                    <div>Guesses Remaining: {guessLeft}</div>
                    <input 
                        class="balloon" id="planet" type="text" placeholder="Probably Earth" 
                        value={this.state.currentGuess}
                        placeholder="Guess"
                        onChange={this.handleGuess} />
                </div>
            );
        }else {
            return (
                <div>
                    Ya Lost. The word was "{word.toUpperCase()}"
                    
                </div>
            );
        }
        
    }
}

export default Guess;