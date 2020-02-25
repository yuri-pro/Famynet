import React from 'react';
import continner from "./Content.module.css";
import Account from "./Account/Account";
import MyPost from "./MyPost/MyPost";

const Content =(props) =>{
    debugger;
    return(
        <section className={continner.inner}>
            <Account />
            <MyPost posts={props.state.profilePage.postData} />
        </section>
    )
}

export default Content;