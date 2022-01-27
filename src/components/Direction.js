import { red } from '@material-ui/core/colors';
import React from 'react';
import "./Direction.css";

function Direction(props) {
    const {caption, description, colour} = props;
    return (
        <div className='Direction' style={{backgroundColor: colour}}>
            <h2>{caption}</h2>
            <p>{description}</p>
    
        </div>
    )
}

export default Direction
