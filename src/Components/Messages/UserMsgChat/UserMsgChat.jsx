import React from "react";
import chat from "./UserMsgChat.module.css"

const UserMsgInner = (props) =>{
    return(
        <div>{props.msgInner}</div>
    )
}

export default UserMsgInner;