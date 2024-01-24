// netlify function
// this function takes in the search params and makes the request to the API and returns the data to be built into products

import axios from 'axios';
import { UNSPLASH_SEARCH_URL } from '../../src/data/config';

export const handler = async (event) => {
  try {
    const options = {
      url: UNSPLASH_SEARCH_URL,
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

    const { data } = await axios.request(options)

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return { 
        statusCode: status,
        body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}