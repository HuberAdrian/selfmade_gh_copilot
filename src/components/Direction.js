import { red } from '@material-ui/core/colors';
import React from 'react';
import "./Direction.css";

function Direction(props) {
    const {caption, description="", home=true} = props;

    let add_class_h2 = "";
    if (description === "") {
        add_class_h2 = " withoutDesc";
    }

    let add_class_div ="";
    if (home) {
        add_class_div = " homeForFlex"
    }

    return (
        <div className={'Direction' + add_class_div}>
            <h2 className={add_class_h2}>{caption}</h2>
            {description != "" && <p>{description}</p>}
    
        </div>
    )
}

export default Direction