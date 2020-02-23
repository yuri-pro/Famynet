import React from "react";
import msgName from "./UserMsgName.module.css";
import {NavLink} from "react-router-dom";

const UserMsg = (props) =>{
    return(
        <div><NavLink to ={"/Messages/" + props.id}>{props.name}</NavLink></div>
    )
}


export default UserMsg;