import axios from 'axios';
//send the data frontend to backend
const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);//http://localhost:8000/upload
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}