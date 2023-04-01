import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cYAZy8LKT_DtqjucZu-YjRh48X3vRsI4pngjYGMPuVk'
    }  
})