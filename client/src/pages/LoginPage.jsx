import React from 'react';
import useLoginDetails from '../hooks/useLoginHook'
import {Link} from "react-router-dom";


const LoginPage = () => {
    const {formData, handleChange, handleSubmit} = useLoginDetails();

    return (
        <>
        <Link to="/signup">Sign Up</Link>
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <label>Password: </label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    );
}

export default LoginPage;