import { useState } from 'react';
import styled from 'styled-components';
import TextComponent from './components/common/TextComponent';
import simpleHttpRequest from './network/request';

function App() {
    // 로그인 인풋 상태관리
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    // access token 상태관리
    // const [accessToken, setAccessToken] = useState('');

    // 로그인 API
    // - 통신함수이기 때문에 async await을 사용하였다.
    // - 요청하는 함수니 요청해서 응답을 받는 작업까지만 수행해야 깔끔하다.
    // - 후처리같은 코드를 같이두지 말라는 뜻.
    const loginAPI = async () => {
        // const response = await axios.get('http://localhost:5001/users/0');
        const response = await simpleHttpRequest('GET', '/users/0');
        return response;
    };

    // 로그인 버튼 핸들러
    const clickLoginButtonHandler = () => {
        console.log(loginInfo);
        let loginAPIResponse = loginAPI();
        localStorage.setItem(
            'access_token',
            loginAPIResponse.data.access_token
        );
    };

    return (
        <Main>
            <Title>로그인</Title>
            {/* Email Input */}
            <TextComponent
                inputType={'text'}
                text={loginInfo.email}
                changeTextFn={(e) => {
                    // console.log('email input : ', e);
                    setLoginInfo({ ...loginInfo, email: e.target.value });
                }}
            />
            {/* Password Input */}
            <TextComponent
                inputType={'password'}
                text={loginInfo.password}
                changeTextFn={(e) => {
                    // console.log('password input : ', e);
                    setLoginInfo({ ...loginInfo, password: e.target.value });
                }}
            />
            {/* Login Button */}
            <Button onClick={() => clickLoginButtonHandler()}>로그인</Button>
            {/* <Button
                onClick={() => {
                    localStorage.setItem('email', 'dev@dev.io');
                }}
            >
                저장하기
            </Button>
            <Button
                onClick={() => {
                    localStorage.removeItem('email', 'dev@dev.io');
                }}
            >
                지우기
            </Button> */}
            {/* <AccessToken>access token : {accessToken}</AccessToken> */}
        </Main>
    );
}

export default App;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    min-width: 1000px;
    gap: 10px;
`;
const Title = styled.h1``;
const Button = styled.button`
    width: 20%;
`;
