import React from "react"
import cssClasses from "./TextArea.module.css"
const input = (props)=>
{
    return (
        <textarea className={cssClasses.TextArea} rows="4" cols="20">
        </textarea>
        );
}

export default input