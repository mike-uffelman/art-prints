// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import axios from 'axios';
// const axios = require('axios');
// import {unsplash} from '../../../src/data/unsplash';



export const handler = async (event) => {


  try {
    console.log('event query params', event.queryStringParameters)

    const options = {
      url: 'https://api.unsplash.com/search/photos',
      method: 'get',
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
      },
      timeout: 4000,
      params: {
        query: event.queryStringParameters.query,
        page: event.queryStringParameters.page,
        content_filter: event.queryStringParameters.content_filter
      }
    }

    console.log('++++++++', axios.getUri(options))
    const {
      data
    } = await axios.request(options)

    console.log('data: ', data)
    // const res = await unsplash.get('/search/photos', {
    //   params: {
    //       query: event.queryStringParameters,
    //       page: page,
    //       content_filter: 'high',
    //       // per_page: 30
    //   }
    // })

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }

    //   const subject = event.queryStringParameters.name || 'World'
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: `Hello ${subject}` }),
    //     // // more keys you can return:
    //     // headers: { "headerName": "headerValue", ... },
    //     // isBase64Encoded: true,
    //   }
  } catch (error) {
    console.log('fetch-photos error', error)
    const {
      status,
      statusText,
      headers,
      data
    } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({
        status,
        statusText,
        headers,
        data
      })
    }
  }
}