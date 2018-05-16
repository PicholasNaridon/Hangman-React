import React from 'react';

const Display = (props) => {
    return (
        <div className="wordContainer">
            <div>{props.output}</div>
        </div>
    );
};

export default Display;