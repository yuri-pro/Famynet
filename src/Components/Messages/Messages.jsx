import React from "react";
import msg from "./Messages.module.css";

const Messages = () =>{
    return(
            <div className={msg.inner}>
                <div className={msg.friendInner}>
                    <div>Yuri</div>
                    <div>Dmitrij</div>
                    <div>Anastasija</div>
                    <div>Evgenij</div>
                    <div>Krowka</div>
                    <div>Unknown</div>
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