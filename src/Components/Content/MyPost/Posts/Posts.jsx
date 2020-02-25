import React from 'react';
import post from"./Posts.module.css";

const Posts = (props) =>{
    return(
        <section className={post.main}>
            <div className={post.inner}>
                <div className={post.friend__post}>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/15-skull-1561123015.jpg?crop=1.00xw:0.804xh;0,0.0944xh&resize=480:*" alt="friends-logo"/>
                    <span>{props.name}</span>
                </div>
                <div className={post.post__inner}>
                    <span>{props.name} says:</span>
                    <p>{props.message}</p>
                    <button>Like: {props.like}</button>
                </div> 
                    
            </div>   
        </section>
    )
}

export default Posts;