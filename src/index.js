import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

 //data for myPost.jsx
const postData = [        
    {id:1, name:"Joe Doe", message:"My first react post", like:5},
    {id:2, name:"Chuck Norris", message:"My second react post", like:12}
]


//data for Messages.jsx
const userData = [
    {id:1, name:"Yuri"},
    {id:2, name:"Dmitrij"},
    {id:3, name:"Anastasija"},
    {id:4, name:"Evgenij"},
    {id:5, name:"Krowka"},
    {id:6, name:"Unknown"}
]

const msgData =[
    {id:1, msgInner: "Hi how are you?"},
    {id:2, msgInner: "Are you here?"},
    {id:3, msgInner: "Yep, how can I help you?"}
]


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
