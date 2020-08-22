import React from "react"
import cssClasses from "./CheckButton.module.css"


const checkButton = ()=>
{
    return (
           <input className={cssClasses.CheckButton} type="checkbox"></input>
    );
}

export default checkButton