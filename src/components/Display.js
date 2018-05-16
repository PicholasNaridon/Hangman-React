import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div className="wordContainer">
                <div>{this.props.output}</div>
            </div>
        );
    }
}

export default Display;