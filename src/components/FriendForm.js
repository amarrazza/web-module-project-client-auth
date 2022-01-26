import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friend = (props) => {
    const { setFriends } = props;
    const [ newFriend, setNewFriend ] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        // console.log(credentials);
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(resp => {
                console.log(resp);
                setFriends(resp.data);
                
            
            })
            .catch(err => {
                console.log(err);
            })
    }
    // console.log(newFriend);
    return(
        <div>
            <h1>Add a Friend</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    placeholder='name'
                />
                <input 
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    placeholder='email'
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default Friend;