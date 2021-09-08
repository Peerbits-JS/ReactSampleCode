import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default instance;