export const apiUrl = process.env.REACT_APP_API;

export const setToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => localStorage.removeItem('token');
