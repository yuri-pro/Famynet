import React from 'react';
import continner from "./Content.module.css";
import Account from "./Account/Account";
import MyPost from "./Account/Mypost/MyPost";

const Content =() =>{
    return(
        <section className={continner.inner}>
            <Account />
            <MyPost />
        </section>
    )
}

export default Content;