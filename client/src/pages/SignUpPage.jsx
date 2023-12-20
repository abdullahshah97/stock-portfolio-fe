import useSignUpDetails from '../hooks/useSignUpHook'

const SignupPage = () => {
    const {signUpDetails, handleInputChange, handleSubmit } = useSignUpDetails();

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={signUpDetails.username} onChange={e => handleInputChange(e, 'username')}/>
            <input type="email" name="email" value={signUpDetails.email} onChange={e => handleInputChange(e, 'email')}/>
            <input type="password" name="password" value={signUpDetails.password} onChange={e => handleInputChange(e, 'password')}/>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupPage;