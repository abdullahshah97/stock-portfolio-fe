import React, {useState} from 'react';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

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
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;