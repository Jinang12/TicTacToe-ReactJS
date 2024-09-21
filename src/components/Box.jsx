import React from "react";
const Box = (props) => {
    return (
        <div className="square" onClick={props.onClick}>
            <h5>{props.value}</h5>
        </div>
    );
}
export default Box;
