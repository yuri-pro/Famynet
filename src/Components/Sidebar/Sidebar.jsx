import React from 'react';
import "./Sidebar.module.css";

const Sidebar = () =>{
    return(
        <aside>
            <a href ="#s"><div>Profile</div></a>
            <a href ="#s"><div>Messages</div></a>
            <a href ="#s"><div>News</div></a>
            <a href ="#s"><div>Music</div></a>
            <a href ="#s"><div>Settings</div></a>
      </aside>
    )
}

export default Sidebar;