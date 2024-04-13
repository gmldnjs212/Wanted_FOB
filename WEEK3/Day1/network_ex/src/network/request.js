// 네트워크 요청만 하는 함수를 작성
// 비동기 통신이기 때문에 async-await를 붙여줌

import axios from 'axios';

async function simpleHttpRequest(method = 'GET', url = '/') {
    let response = null;
    let baseURL = 'http://localhost:5001';
    let requestURL = baseURL + url;
    console.log(requestURL);
    // 1. 요청을 만들어야 함
    // 2. 어떤 곳으로, 어떤 데이터를, 어떤 방식으로
    // - 여기까지는 공통설정으로 다룰 수 있으나
    //   어떤 방식으로 요청을 보낼지는 매번 달라질 수 있다
    //   ( 예. get, post )
    // axios.create({
    //     baseURL: 'https://localhost:5001',
    //     timeout: 2000,
    //     header: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // 3. 요청을 보내야함

    // - fetch의 경우
    // fetch(url, {
    //     method: method
    // })

    // - axios의 경우
    // axios.post
    // axios.get

    // if (method === 'POST') {
    //     axios.post(url);
    // }

    if (method === 'GET') {
        response = await axios.get(requestURL);
        return response;
    }
}

export default simpleHttpRequest;

// http 요청할 때 순서 (xhr)
// 1. 요청을 만들어야 함
// 2. 어떤 곳으로, 어떤 데이터를, 어떤 방식으로
// 3. 요청을 보내야함
// 4. 요청에 대한 응답을 받아야함
// 5. 후처리 ( localstorage에 넣거나 redux로 상태관리를 하는.. )
