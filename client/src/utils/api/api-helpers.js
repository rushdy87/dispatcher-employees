import axios from 'axios';
import { apiConfig } from './api-config';

const apiInstance = axios.create({
  baseURL: apiConfig.baseURL,
});

export const handleApiError = (error) => {
  console.error(error);
  throw error; // Optionally rethrow the error if you want to handle it elsewhere.
};

export const makeApiRequest = async (url, method, data = null) => {
  try {
    const response = await apiInstance.request({
      url,
      method,
      data,
    });

    if (response.status === 404) {
      // Handle the 404 error specifically.
      // You can return null or throw a custom error message if needed.
      console.log('Resource not found');
      return null;
    }

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
