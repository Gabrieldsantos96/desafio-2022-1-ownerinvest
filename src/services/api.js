import axios from 'axios';

export default axios.create({

    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 100000,
    headers: { 'Content-type': 'application/json'}     
    
});