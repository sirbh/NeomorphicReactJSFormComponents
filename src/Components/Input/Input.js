import React,{Fragment} from "react"
import cssClasses from "./Input.module.css"
const input = (props)=>
{
    return (
            <Fragment>
                <label className={cssClasses.Label} htmlFor="name"></label>
                <input className={cssClasses.Input} id="name" name="name" placeholder='Placeholder' type="text"></input>
            </Fragment>
        );
}

export default input