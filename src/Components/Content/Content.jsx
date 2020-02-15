import React from 'react';
import continner from "./Content.module.css";
import Account from "./Account/Account";
import Posts from "./Account/Posts/Posts";
import Mypost from "./Account/Posts/MyPost/MyPost";

const Content =() =>{
    return(
        <section className={continner.inner}>
            <Account />
            <Mypost />
            <Posts />
        </section>
    )
}

export default Content;