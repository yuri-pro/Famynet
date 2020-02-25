import React from "react";
import msg from "./Messages.module.css";
import UserMsg from "./UserMsgName/UserMsgName";
import UserMsgInner from "./UserMsgChat/UserMsgChat";

const Messages = (props) =>{
const mapUserData = props.state.messagesPage.userData.map(item => (<UserMsg id={item.id} name ={item.name}/>) );

const mapMsgData = props.state.messagesPage.msgData.map(item => (<UserMsgInner msgInner={item.msgInner} id= {item.id} />) );

    return(
            <div className={msg.inner}>
                <div className={msg.friendInner}>              
                    { mapUserData }
                </div>
                <div className ={msg.chatInner}>
                    { mapMsgData }
                    
                </div>
            </div>
    )
}

export default Messages;