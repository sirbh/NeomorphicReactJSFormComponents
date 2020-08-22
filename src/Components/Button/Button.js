import React from "react"
import cssClasses from "./Button.module.css"


const button = ()=>
{
    return (
           <input className={cssClasses.Button} type="button" value="SUBMIT"></input>
    );
}

export default button