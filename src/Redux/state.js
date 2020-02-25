let state = {
    profilePage:{       //data for myPost.jsx 
        postData:[             
                {id:1, name:"Joe Doe", message:"My first react post", like:5},
                {id:2, name:"Chuck Norris", message:"My second react post", like:12}
            ]
    },
    messagesPage:{      //data for Messages.jsx
        userData:[
            {id:1, name:"Yuri"},
            {id:2, name:"Dmitrij"},
            {id:3, name:"Anastasija"},
            {id:4, name:"Evgenij"},
            {id:5, name:"Krowka"},
            {id:6, name:"Unknown"}
        ],
        msgData: [
            {id:1, msgInner: "Hi how are you?"},
            {id:2, msgInner: "Are you here?"},
            {id:3, msgInner: "Yep, how can I help you?"}
        ]
        
    }

}

export default state;