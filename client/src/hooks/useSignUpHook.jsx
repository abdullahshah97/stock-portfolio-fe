import { useState } from 'react';
import SignUpService from "../backendService/SignUpService";

const useSignUpDetails = () => {
    const [signUpDetails, setSignUpDetails] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });

    const handleInputChange = (e, key) => {
        setSignUpDetails({
            ...signUpDetails,
        [key]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await SignUpService.signup(signUpDetails)
            console.log("SIGN UP SUCCESSFUL");
            setSignUpDetails({
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            })
        } catch (error){
            console.error('Sign-up failed:', error);
        }
    }

    return {
        signUpDetails,
        handleInputChange,
        handleSubmit,
    };
}
export default useSignUpDetails;