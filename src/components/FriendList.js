import React, { useEffect, useState } from "react";

import Friend from "./Friend";
import FriendForm from "./FriendForm";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendList = () => {

    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(resp => {
                console.log(resp);
                setFriends(resp.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    


    return(
        <div>
            <h1>All the friends</h1>
            {
                friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })
            }
            <FriendForm setFriends={setFriends} />
        </div>
    )
}

export default FriendList;