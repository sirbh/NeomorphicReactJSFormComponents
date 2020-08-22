import React,{Fragment} from "react"
import cssClasses from "./Radio.module.css"
const radio = ()=>
{
    return ( 
        <Fragment>
            <input className={cssClasses.Radio} type="radio" name ="user"></input>
        </Fragment>


       
    )
}

export default radio