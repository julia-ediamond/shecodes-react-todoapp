import React from "react";

function Date(props) {
    const {when} = props;

    return (
        <div> 
        <p>When: {when}</p>
        </div>
    )
}

export default Date;