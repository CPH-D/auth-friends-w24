import React, { useState } from 'react';
import axios from 'axios';

// username: Lambda School
// password: i<3Lambd4

const Login = (props) => {
    console.log(props);
    const [creds, setCreds] = useState({ username: "", password: ""});
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value})
    };

    // when we submit (username+password), we're going to send a post request and get a response with console.log
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', creds)
        // if successful, then...
        .then(res => {
            console.log(res);
            // saving token to local storage. with token, we're able to persist user login session between refreshes
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
        })
        // if it fails, then do this...
        .catch(err => console.log(err.respons));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   name="username"
                   placeholder="Enter your username..." 
                   onChange={handleChange}
                   value={creds.username}
                   />
            <input type="password"
                   name="password" 
                   placeholder="Enter your password..."
                   onChange={handleChange}
                   value={creds.password}
                   />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;