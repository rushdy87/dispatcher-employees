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

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
