import { red } from '@material-ui/core/colors';
import React from 'react';
import "./Direction.css";

function Direction(props) {
    const {caption, description=""} = props;

    let add_class = "";
    if (description === "") {
        add_class = " withoutDesc";
    }

    return (
        <div className='Direction'>
            <h2 className={add_class}>{caption}</h2>
            {description != "" && <p>{description}</p>}
    
        </div>
    )
}

export default Direction