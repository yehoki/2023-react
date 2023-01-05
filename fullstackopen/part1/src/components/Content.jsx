import React from "react";
import Part from "./Part";

function Content(props) {
    const content = props.content;
    
    return (
        <div>
            <h3>Parts and number of exercises</h3>
            <Part information = {content[0]}/>
            <Part information = {content[1]}/>
            <Part information = {content[2]}/>
        </div>
    )
}

export default Content;
