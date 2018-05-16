import React, { Component } from 'react';
import Guess from './Guess'
import GuessList from './GuessList'
import Word from './Word'
import Score from './Score'
import _ from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import "../assets/styles/Board.css"

  
const state_list = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "NorthCarolina", "NorthDakota", "Nebraska", "NewHampshire", "NewJersey", "NewMexico", "Nevada", "NewYork", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "RhodeIsland", "SouthCarolina", "SouthDakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "WestVirginia", "Wyoming"]
const ding = new Audio("../assets/sounds/ding.mp3")

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            guesses: [],
            letters:  (_.sample(state_list).toLowerCase()).split(""),
            correct: [],
            wins: 0,
            losses: 0
        }

        this.addGuess = this.addGuess.bind(this)
        this.sendOutput = this.sendOutput.bind(this)
        this.updateScore = this.updateScore.bind(this)
        this.reset = this.reset.bind(this)
    }

    addGuess(guess) {
        let currentGuesses = this.state.guesses.concat([guess])
        let letters = this.state.letters
        var intersec =  currentGuesses.filter(function(n) {
              return letters.indexOf(n) !== -1;
          });
          console.log(intersec)
         this.setState({
             guesses: _.xor(this.state.guesses.concat([guess])),
             correct: _.xor(intersec)
         })
      }
      sendOutput(){
          var cor = this.state.correct
          var lets = this.state.letters
          var output = ""

          _.forEach(lets, function(value){
              if (_.includes(cor, value)){
                  ding.play()
                  output += value.toUpperCase() + " "
              }else {
                  output += "_ "
              }
          })
          return output
      }

      updateScore(){
            this.setState({
                wins: this.state.wins += 1,
                letters: (_.sample(state_list).toLowerCase()).split(""),
                guesses: [],
                correct: []
            })
      }
      reset(){
          if (this.state.guesses.length > 0 ){
            this.setState({
                losses: this.state.losses += 1,
                letters: (_.sample(state_list).toLowerCase()).split(""),
                guesses: [],
                correct: []
              })
          }else{
              alert("Give it a fucking try first asshole")
          }
      }


    render() {
        return (
            <MuiThemeProvider>
                <div class="background"></div>
                <Paper style={mainPaperStyle} zDepth={2}>
                    <div class="container">
                        <div className="title">Guess the US State!</div>
                        <Word 
                            output={this.sendOutput()}
                        />
                        <Guess 
                            submitGuess={this.addGuess}
                            giveUp={this.reset}
                            currentGuessList={this.state.guesses}
                            theLetters={this.state.letters}
                            restart={this.gameOver}
                        />
                        <GuessList 
                            currentGuessList={this.state.guesses}
                            currentCorrect={this.state.correct}
                            theLetters={this.state.letters}
                            correctAnswers={this.state.correctAnswers}
                        />
                        <Score 
                            output={this.sendOutput()}
                            count={this.state.letters}
                            wins={this.state.wins}
                            losses={this.state.losses}
                            changeScore={this.updateScore}
                        />
                        <RaisedButton style={{margin: "3%"}} label="Next Word" primary={true} onClick={this.reset} />
                    </div>
                 </Paper>
            </MuiThemeProvider>
        );
    }
}

export default Board;

const mainPaperStyle= {
    height: "85%",
    width: "35%",
    margin: 20,
    display: 'inline-block',
    opacity: 0.95,
    marginTop: '5%',
    justifyContent: 'center',
    border: "1px solid rgb(0, 188, 212)"
  };
