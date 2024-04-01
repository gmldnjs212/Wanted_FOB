import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  let navigate = useNavigate();

  // 추가하기 버튼 핸들러
  const onClickAddButtonHandler = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const onClickCardHandler = (item) => {
    navigate(`/detail/${item}`);
  };

  return (
    <Layout>
      <MainBox>
        <Title>내 버킷리스트</Title>
        <CardContainer>
          {todos.map((item, index) => (
            <Card key={index} onClick={() => onClickCardHandler(item)}>
              {item}
            </Card>
          ))}
        </CardContainer>
      </MainBox>
      <InputBox>
        <Input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            onClickAddButtonHandler();
          }}
        >
          추가하기
        </Button>
      </InputBox>
    </Layout>
  );
}

export default Home;

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
const CardContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: start;
`;
const Card = styled.div`
  width: 100%;
  height: 2rem;
  background: skyblue;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`;
const InputBox = styled.div`
  display: flex;
  width: 80%;
  height: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 70%;
  height: 1.5rem;
`;
const Button = styled.button`
  height: 1.8rem;
`;
