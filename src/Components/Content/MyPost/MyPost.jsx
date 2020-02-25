import React from 'react';
import mypost from "./MyPost.module.css";
import Posts from "./Posts/Posts";

const Mypost = (props) => {
    debugger;
const mapPostData = props.posts.map(item => (<Posts message ={item.message} like ={item.like} name={item.name}/>) );
    return(
        <div>
            <section className={mypost.inner}>
                <span>My Post</span>
                <textarea name="mypost" id="" cols="30" placeholder="Write your post..." rows="10"></textarea>
                <button>POST</button>
            </section>
            { mapPostData }
        </div>
    )
}

export default Mypost;