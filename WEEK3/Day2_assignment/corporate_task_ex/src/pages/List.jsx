import styled from "styled-components";
import { useEffect, useState } from "react";
import Axios from "axios";
import ADimg from "../assets/IMG_2126.jpg";

const List = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1); // 페이지 상태관리
  const perPage = 10; // 페이지당 보여줄 데이터 개수

  useEffect(() => {
    const requestURL = `https://api.github.com/repos/angular/angular-cli/issues`;

    const requestIssues = async () => {
      try {
        const response = await Axios.get(requestURL, {
          params: {
            state: "open",
            sort: "comments",
            direction: "desc",
            per_page: perPage,
            page: page,
          },
        });
        console.log(response);
        setIssues((prevIssues) => [...prevIssues, ...response.data]);
      } catch (error) {
        console.error("Request Error >> ", error);
      }
    };
    requestIssues();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CardListArea>
      {issues.map((issue, index) => {
        if ((index + 1) % 5 === 0) {
          // 5번째 마다 광고 출력
          return (
            <Card key={`AD-${index}`}>
              <ImgContainer href='https://www.wanted.co.kr/'>
                <Img src={ADimg} alt='ADimg' />
              </ImgContainer>
            </Card>
          );
        } else {
          // 나머지는 이슈 출력
          return (
            <Card key={issue.id}>
              <CardHeader>
                {issue.number} {issue.title}
              </CardHeader>
              <CardContent>
                {issue.user.login} {issue.created_at}
              </CardContent>
              <CardComment>코멘트 : {issue.comments}</CardComment>
            </Card>
          );
        }
      })}
    </CardListArea>
  );
};

export default List;

const CardListArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 10px;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  padding: 5px;
  border-bottom: 2px black solid;
`;

const CardHeader = styled.div``;
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
