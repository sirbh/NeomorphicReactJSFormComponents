import React from "react"
import cssClasses from "./Toggle.module.css"
const toggle = ()=>
{
    return (
            <input className={cssClasses.Toggle} type="checkbox"></input>
    )
}

export default toggle