
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = '929a4af55ea1473950412f729888a05e'; 
  return config;
});

export default api;