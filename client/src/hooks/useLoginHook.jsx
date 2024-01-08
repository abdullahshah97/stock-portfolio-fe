import { useState } from "react";
import LoginService from "../backendService/LoginService";

const useLoginDetails = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await LoginService.login(formData);
            // Handle success, e.g., show a success message or redirect
            console.log(response);
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error(error);
        }
    };

    return{
        formData,
        handleChange,
        handleSubmit
    }
}

export default useLoginDetails;