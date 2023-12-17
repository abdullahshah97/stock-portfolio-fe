const BASE_URL = 'http://localhost:8080/user';

const SignUpService = {
  signup: async (userData) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    return response.json();
  },
};

export default SignUpService;