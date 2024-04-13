// TextComponent의 역할
// - 부모컴포넌트로부터 text를 받을 수 있어야 함
// - 변경사항을 부모에게 알려줄 수 있어야함

import styled from 'styled-components';

const TextComponent = ({ inputType, inputText, changeTextFn }) => {
    return (
        <Input
            type={inputType}
            value={inputText}
            onChange={(e) => {
                changeTextFn(e);
            }}
        />
    );
};

export default TextComponent;

const Input = styled.input`
    width: 20%;
`;
