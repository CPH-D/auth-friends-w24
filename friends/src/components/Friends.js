import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosWithAuth from '../utilities/Authorization';
import Form from './Form';
import Card from './Card';

const Friends = (props) => {
    const [friendsList, setFriendsList] = useState([]);
    
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            // console.log(res);
            setFriendsList(res.data);
        })
        .catch(err => console.log(err.response));
    }, []);

    const addFriend = friend => {
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
        .then(res => setFriendsList(res.data))
        .catch(err => console.log(err.response));
    };

    const deleteFriend = id => {
        // console.log(id);
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Friends</h2>
            <Form submitFriend={addFriend}/>
            {friendsList.map(friend => {
                return <Card key={friend.id}
                             friend={friend}
                             deleteFriend={deleteFriend}/>;
            })}
        </div>
    );
};

export default Friends;