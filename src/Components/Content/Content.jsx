import React from 'react';
import continner from "./Content.module.css";
import Account from "./Account/Account";
import MyPost from "./Account/Mypost/MyPost";

const Content =(props) =>{
    return(
        <section className={continner.inner}>
            <Account />
            <MyPost posts={props.postData} />
        </section>
    )
}

export default Content;