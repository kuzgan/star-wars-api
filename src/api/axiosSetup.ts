import axios from 'axios';
import { apiUrl } from './apiUrl';

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});
