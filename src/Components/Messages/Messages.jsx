import React from "react";
import msg from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const Messages = () =>{
    return(
            <div className={msg.inner}>
                <div className={msg.friendInner}>
                    <div><NavLink to ="/Messages/1">Yuri</NavLink></div>      {/* setting out routes for users to show msg */}
                    <div><NavLink to ="/Messages/2">Dmitrij</NavLink></div>
                    <div><NavLink to ="/Messages/3">Anastasija</NavLink></div>
                    <div><NavLink to ="/Messages/4">Evgenij</NavLink></div>
                    <div><NavLink to ="/Messages/5">Krowka</NavLink></div>
                    <div><NavLink to ="/Messages/6">Unknown</NavLink></div>
                </div>
                <div className ={msg.chatInner}>
                    <div>Hi how are you?</div>
                    <div>Are you here?</div>
                    <div>Yep, how can I help you?</div>
                </div>
            </div>
    )
}

export default Messages;