const BASE_URL = 'http://localhost:8080/user';

const LoginService = {
    login: async (userData) => {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        console.log(response);
        return response.json();
    },
};

export default LoginService;