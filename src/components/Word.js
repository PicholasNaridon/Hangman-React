import React, { Component } from 'react';

class Word extends Component {
    constructor(props){
        super(props)
        this.state = {
            output: [],
            letters: this.props.theLetters
        }
    }


    render() {
        return (
            <div className="wordContainer">
                <div>{this.props.output}</div>
            </div>
        );
    }
}

export default Word;