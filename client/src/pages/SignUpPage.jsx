import useSignUpDetails from '../hooks/useSignUpHook'
import {Link} from "react-router-dom";
import React from "react";

const SignupPage = () => {
    const {signUpDetails, handleInputChange, handleSubmit } = useSignUpDetails();

    return (
        <>
            <Link to="/login">Log In</Link>
            <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" name="email" value={signUpDetails.email} onChange={e => handleInputChange(e, 'email')}/>
            <label>Password: </label>
            <input type="password" name="password" value={signUpDetails.password} onChange={e => handleInputChange(e, 'password')}/>
            <button type="submit">Sign Up</button>
        </form>
        </>
    );
};

export default SignupPage;