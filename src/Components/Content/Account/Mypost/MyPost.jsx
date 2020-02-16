import React from 'react';
import mypost from "./MyPost.module.css";
import Posts from "./Posts/Posts";

const Mypost = () => {
    return(
        <div>
            <section className={mypost.inner}>
                <span>My Post</span>
                <textarea name="mypost" id="" cols="30" placeholder="Write your post..." rows="10"></textarea>
                <button>POST</button>
            </section>
            <Posts message ="My first react post" like ="5" name="Joe Doe"/>
            <Posts message = "My second react post" like ="12" name="Chuck Norris" />
        </div>
    )
}

export default Mypost;