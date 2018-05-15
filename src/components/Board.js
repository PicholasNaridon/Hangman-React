import React, { Component } from 'react';
import Guess from './Guess'
import GuessList from './GuessList'
import Word from './Word'
import Score from './Score'
import _ from 'lodash'
import "../styles/Board.css"

const state_list = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "NorthCarolina", "NorthDakota", "Nebraska", "NewHampshire", "NewJersey", "NewMexico", "Nevada", "NewYork", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "RhodeIsland", "SouthCarolina", "SouthDakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "WestVirginia", "Wyoming"]

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
                  output += value + " "
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
                losses: this.state.losses -= 1,
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
            <div className="container">
                <h1>Guess the US State!</h1>
                    <Word 
                        output={this.sendOutput()}
                        />
                   
                    <GuessList 
                        currentGuessList={this.state.guesses}
                        currentCorrect={this.state.correct}
                        theLetters={this.state.letters}
                        correctAnswers={this.state.correctAnswers}
                        />
                    <Guess 
                        submitGuess={this.addGuess}
                        giveUp={this.reset}
                        currentGuessList={this.state.guesses}
                        theLetters={this.state.letters}
                        restart={this.gameOver}
                        />
                         <Score 
                        output={this.sendOutput()}
                        count={this.state.letters}
                        wins={this.state.wins}
                        losses={this.state.losses}
                        changeScore={this.updateScore}
                        />
              
                <   div>{this.state.remainingGuesses}</div>
                    <div>
                        <button onClick={this.reset}>Reset</button>
                    </div>
            </div>
        );
    }
}

export default Board;

