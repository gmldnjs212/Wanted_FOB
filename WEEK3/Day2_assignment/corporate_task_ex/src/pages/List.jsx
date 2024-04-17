import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ADimg from '../assets/IMG_2126.jpg';
import { dateConverter } from '../function/dateConverter';

const List = () => {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1); // 페이지 상태관리
    const perPage = 10; // 페이지당 보여줄 데이터 개수
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태관리

    useEffect(() => {
        const requestURL = `https://api.github.com/repos/angular/angular-cli/issues`;

        const requestIssues = async () => {
            try {
                setIsLoading(true); // 데이터를 불러올 때 로딩 상태 설정
                const response = await Axios.get(requestURL, {
                    params: {
                        state: 'open',
                        sort: 'comments',
                        direction: 'desc',
                        per_page: perPage,
                        page: page,
                    },
                });
                setIssues((prevIssues) => [...prevIssues, ...response.data]);
                setIsLoading(false); // 데이터 로딩 완료 후 상태 변경
            } catch (error) {
                console.error('Request Error >> ', error);
                setIsLoading(false); // 에러 발생 시 로딩 상태 변경
            }
        };
        requestIssues();
    }, [page]);

    useEffect(() => {
        const observerOptions = {
            root: null, // viewport를 기준으로 intersection을 계산합니다.
            rootMargin: '0px', // viewport에 대한 여백
            threshold: 0, // 요소의 얼마나 보이는지를 나타내는 값 (0.0 ~ 1.0)
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry);
                    setPage((prevPage) => prevPage + 1);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const loadingElement = document.getElementById('observer');
        if (loadingElement) {
            observer.observe(loadingElement);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <CardListArea>
            {issues.map((issue, index) => {
                if ((index + 1) % 5 === 0) {
                    return (
                        <Card key={`AD-${index}`}>
                            <ImgContainer href="https://www.wanted.co.kr/">
                                <Img src={ADimg} alt="ADimg" />
                            </ImgContainer>
                        </Card>
                    );
                } else {
                    return (
                        <Card key={issue.id}>
                            <CardHeader>
                                {issue.number} {issue.title}
                            </CardHeader>
                            <CardContent>
                                작성자 : {issue.user.login} , 작성일 :{' '}
                                {dateConverter(issue.created_at)}
                            </CardContent>
                            <CardComment>코멘트 : {issue.comments}</CardComment>
                        </Card>
                    );
                }
            })}
            {/* {isLoading && <p>Loading...</p>} */}
            <div
                id="observer"
                style={{ height: '50px', marginTop: '20px' }}
            ></div>
        </CardListArea>
    );
};

export default List;

const CardListArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    gap: 10px;
`;

const Card = styled.div`
    position: relative;
    width: 700px;
    padding: 5px 5px 15px 5px;
    border-bottom: 2px black solid;
`;
const CardHeader = styled.h3`
    width: 80%;
    margin: 0px 0px 5px 0px;
`;
const CardContent = styled.div``;
const CardComment = styled.div`
    position: absolute;
    right: 5px;
    top: 20px;
`;
const ImgContainer = styled.a`
    width: inherit;
    height: inherit;
`;
const Img = styled.img`
    width: inherit;
    height: inherit;
`;
