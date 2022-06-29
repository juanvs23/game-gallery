import axios from 'axios';
/**
 * Create a new axios instance with baseURL
 */
const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_IMDB_URL}`,
});
export default axiosInstance;
