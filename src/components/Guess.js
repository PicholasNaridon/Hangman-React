import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {blue400, blue500} from 'material-ui/styles/colors';

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
                    <TextField
                        inputStyle={{textAlign: "center"}}
                        hintText="Enter A Guess!"
                        value={this.state.currentGuess}
                        underlineStyle={styles.underlineStyle}
                        onChange={this.handleGuess} 
                    />
                    <div className="remaining">Remaining: {guessLeft}</div>
                </div>
            );
        }else {
            return (
                <div className="loss">
                    Ya Lost. The word was "{word.toUpperCase()}"          
                </div>
            );
        }
        
    }
}

export default Guess;

const styles = {
    errorStyle: {
      color: blue400,
    },
    underlineStyle: {
      borderColor: blue400,
    },
    floatingLabelStyle: {
      color: blue400,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };