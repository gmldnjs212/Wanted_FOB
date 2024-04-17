import axios from 'axios';

async function simpleHttpRequest(method = 'GET', url = '/') {
    let response = null;
    let baseURL = 'http://localhost:5001';
    let requestURL = baseURL + url;
    console.log(requestURL);

    if (method === 'GET') {
        response = await axios.get(requestURL);
        return response;
    }
}

export default simpleHttpRequest;
