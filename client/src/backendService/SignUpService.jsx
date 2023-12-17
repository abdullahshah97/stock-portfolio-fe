const BASE_URL = 'https://localhost:8080';

const ApiService = {
  signup: async (userData) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    return response.json();
  },
};

export default ApiService;