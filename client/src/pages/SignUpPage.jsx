import React, { useState } from 'react';
import SignUpService from '../backendService/SignUpService';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await SignUpService.signup(formData);
            // Handle success, e.g., show a success message or redirect
            console.log(response);
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupPage;