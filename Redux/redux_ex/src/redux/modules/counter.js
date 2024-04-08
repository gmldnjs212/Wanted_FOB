// src/redux/modules/counter.js

// 추가된 코드 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

// 추가된 코드 - Action Creator를 만들어 줍니다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};
// 초기 상태값
const initialState = {
  number: 0,
};

// Action Creator를 사용하는 이유
// - 휴먼에러 방지
// - 유지보수 효율성 증가
// - 코드 가독성 증가

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        number: state.number + 1,
      };
    case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
