import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getExampleData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
