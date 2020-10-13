import axios from 'axios';

import { apiUrl, getToken } from './helper';

const api = axios.create({
  baseURL: apiUrl
});

api.interceptors.request.use(function (config) {
  config.headers.token = getToken();
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default api;