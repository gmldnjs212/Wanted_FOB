// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
  };
};
export const subNumber = (payload) => {
  return {
    type: SUB_NUMBER,
    payload: payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer 기본형태
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };
    case SUB_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 뺀다.
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
