import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {blue400, blue500} from 'material-ui/styles/colors';

class EnterGuess extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentGuess: '',
        }
        this.handleGuess = this.handleGuess.bind(this)
        this.calcGuessLeft = this.calcGuessLeft.bind(this)
        this.theWord = this.theWord.bind(this)
    }
    handleGuess(e){
        var guess = e.target.value
        this.props.submitGuess(guess)
        this.setState({
            currentGuess: ''
        })
    }
    calcGuessLeft(){
        return (this.props.theLetters.length - this.props.currentGuessList.length)
    }
    theWord(){
        var word = this.props.theLetters.join("")
        return word.toUpperCase()
    }
    render() {
        if (this.calcGuessLeft() > 0){
            return (
                <div>
                    <TextField
                        value={this.state.currentGuess}
                        hintText={"Guess"}
                        underlineStyle={{borderColor: blue400}}
                        onChange={this.handleGuess} 
                    />
                    <div className="remaining">Remaining: {this.calcGuessLeft()}</div>
                </div>
            );
        }else {
            return (
                <div className="loss">
                    Ya Lost. The word was "{this.theWord()}"          
                </div>
            );
        }
        
    }
}

export default EnterGuess;
