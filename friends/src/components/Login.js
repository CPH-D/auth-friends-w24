import React, { useState } from 'react';

const Login = (props) => {
    const [creds, setCreds] = useState({ username: "", password: ""});
    const handleChange = event => {
        setCreds({...creds, [event.target.name]: event.target.value})
    }
    return (
        <form>
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