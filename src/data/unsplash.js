import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
    },
    timeout: 4000  
})

// const buildRequest = () => {
//     const headers = new Headers({
//         'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
//         'Content-Type': 'application/json',

//     })
// }