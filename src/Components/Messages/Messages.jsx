import React from "react";
import msg from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import UserMsg from "./UserMsgName/UserMsgName";
import UserMsgInner from "./UserMsgChat/UserMsgChat";

const Messages = (props) =>{
    return(
            <div className={msg.inner}>
                <div className={msg.friendInner}>               {/* setting out routes for users to show msg */}
                    <UserMsg id="1" name ="Yuri" />
                    <UserMsg id="2" name ="Dmitrij" />
                    <UserMsg id="3" name ="Anastasija" />
                    <UserMsg id="4" name ="Evgenij" />
                    <UserMsg id="5" name ="Krowka" />
                    <UserMsg id="6" name ="Unknown" />
                </div>
                <div className ={msg.chatInner}>
                    <UserMsgInner msgInner="Hi how are you?" />
                    <UserMsgInner msgInner="Are you here?" />
                    <UserMsgInner msgInner="Yep, how can I help you?" />
                </div>
            </div>
    )
}

export default Messages;