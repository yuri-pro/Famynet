import React from 'react';
import mypost from "./MyPost.module.css";

const Mypost = () => {
    return(
        <section className={mypost.inner}>
            <span>My Post</span>
            <textarea name="mypost" id="" cols="30" placeholder="Write your post..." rows="10"></textarea>
            <button>POST</button>
        </section>
    )
}

export default Mypost;