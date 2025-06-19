import axios from 'axios';

const api = axios.create({
    baseURL: "http://IPLOCAL:3000"
        //"http://host.docker.internal:3000"
});

export default api;