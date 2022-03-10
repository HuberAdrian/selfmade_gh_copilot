import React from 'react'
import './Divider.css';

function Divider({home=true}) {
    let class_div = "divider-div";
    if(!home) {
        class_div = class_div + " homeForFlexDivider"
    }

    return (
        <div className={class_div}>
            <h4>Less used</h4>
            <hr className="divider"></hr>
        </div>
    )
}

export default Divider
