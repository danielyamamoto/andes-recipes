import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjs-andes-recipes-default-rtdb.firebaseio.com/',
});

export default instance;