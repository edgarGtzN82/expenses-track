import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://expenses-track-90902.firebaseio.com/'
});

export default instance;