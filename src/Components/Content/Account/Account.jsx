import React from 'react';
import accinner from "./Account.module.css";

const Account = (props) => {
    return(
            <section className={accinner.inner}>
                <img src="https://i.pinimg.com/originals/7e/6d/6e/7e6d6ef9abe585d49386ca8f36101a34.jpg" alt="profile"/>
                <div>
                    <span>Name:</span><br/>
                    <span>Date of Birth:</span><br/>
                    <span>City:</span>
                </div>   
            </section>
    )
}

export default Account;