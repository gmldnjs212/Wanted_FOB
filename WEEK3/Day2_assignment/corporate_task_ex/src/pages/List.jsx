import styled from 'styled-components';
import dummydatas from '../data/dummyData.json';
import ADimg from '../assets/IMG_2126.jpg';

const List = () => {
    return (
        <CardListArea>
            {dummydatas.map((data) => {
                if (data.id === 'AD') {
                    return (
                        <Card key={data.id}>
                            <ImgContainer href="https://www.wanted.co.kr/">
                                <Img src={ADimg} alt="ADimg" />
                            </ImgContainer>
                        </Card>
                    );
                } else {
                    return (
                        <Card key={data.id}>
                            <CardHeader>
                                {data.id} {data.title}
                            </CardHeader>
                            <CardContent>
                                {data.author} {data.date}
                            </CardContent>
                            <CardComment>코멘트 : {data.comments}</CardComment>
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
    height: 500px;
    gap: 10px;
`;

const Card = styled.div`
    position: relative;
    width: 400px;
    height: 300px;
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
