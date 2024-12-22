import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://api.cosmonos.com', // Replace with your actual API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
api.interceptors.request.use(
  async config => {
    // Get the token from storage
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // If the error is due to an expired token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await api.post('/auth/refresh', { token: refreshToken });
        
        const { token } = response.data;
        await AsyncStorage.setItem('authToken', token);

        // Retry the original request
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (error) {
        // If refresh fails, redirect to login
        // You'll need to implement this part based on your navigation setup
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;