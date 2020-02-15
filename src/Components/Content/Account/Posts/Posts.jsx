import React from 'react';
import post from"./Posts.module.css";

const Posts = () =>{
    return(
        <section className={post.main}>
            <div className={post.inner}>
                <div className={post.friend__post}>
                    <img src="http://clipart-library.com/images_k/funny-gif-transparent-background/funny-gif-transparent-background-17.png" alt="friends-logo"/>
                    <span>Joe Doe</span>
                </div>
                <div className={post.post__inner}>
                    <span>Joe Doe says:</span>
                    <p>It was horrible day for me!!</p>
                    <button>Like</button>
                </div> 
                    
            </div>   
        </section>
    )
}

export default Posts;