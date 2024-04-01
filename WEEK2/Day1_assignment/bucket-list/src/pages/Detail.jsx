import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Detail() {
  const { item } = useParams();
  return (
    <Layout>
      <MainBox>
        <Title>내 버킷리스트</Title>
        <Content>{item} 상세페이지</Content>
      </MainBox>
    </Layout>
  );
}

export default Detail;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;
const MainBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dotted black;
  border-radius: 10px;
  padding: 10px 10px 40px 10px;
`;
const Title = styled.h1`
  color: black;
`;
const Content = styled.div`
  font-size: 20px;
`;
