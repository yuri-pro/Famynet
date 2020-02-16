import React from 'react';
import {NavLink} from "react-router-dom";
import nav from "./Sidebar.module.css";


const Sidebar = () =>{
    return(
        <aside>
            <NavLink to ="/Content/Content.jsx" activeClassName={nav.active}><div>Profile</div></NavLink>
            <NavLink to ="/Messages/Messages.jsx" activeClassName={nav.active}><div>Messages</div></NavLink>
            <NavLink to ="/News/News.jsx" activeClassName={nav.active}><div>News</div></NavLink>
            <NavLink to ="/Music/Music.jsx" activeClassName={nav.active}><div>Music</div></NavLink>
            <NavLink to ="/Settings/Settings.jsx" activeClassName={nav.active}><div>Settings</div></NavLink>
      </aside>
    )
}

export default Sidebar;