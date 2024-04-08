// - 액션객체란, 반드시 type이란 key를 가져야 하는 객체이다. 또한 리듀서로 보낼 “명령"이다.
// - 디스패치란, 액션객체를 리듀서로 보내는 “전달자” 함수이다.
// - 리듀서란, 디스패치를 통해 전달받은 액션객체를 검사하고, 조건이 일치했을 때 새로운 상태값을 만들어내는 “변화를 만들어내는" 함수이다.
// - 디스패치(dispatch)를 사용하기위해서는 useDispatch() 라는 훅을 이용해야 한다.
//     - 디스패치는 스토어의 내장함수 중 하나입니다.
//     - 우선, 디스패치는 액션을 발생 시키는 것 정도로 이해하시면 됩니다.
//     - dispatch 라는 함수에는 액션을 파라미터로 전달합니다.. dispatch(action) 이런식으로 말이죠.
// - 액션객체 type의 value는 대문자로 작성한다. (JS에서 상수는 대문자로 작성하는 룰이 있음)

import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // 컴포넌트에서 스토어를 조회할 때 useSelector를 사용.
  // const counterStore = useSelector((state) => state);
  // console.log(counterStore);
  // const number = useSelector((state) => state.counter.number); // 0

  // dispatch 생성
  const dispatch = useDispatch();

  // 코드 추가
  const number = useSelector((state) => state.counter.number);
  console.log(number); // 콘솔 추가

  return (
    <div>
      {number}
      <button
        onClick={
          // 클릭시 dispatch 실행 -> ()안의 액션객체가 리듀서로 전달된다
          () => dispatch({ type: "PLUS_ONE" })
        }
      >
        +1
      </button>
      <button
        onClick={
          // 클릭시 dispatch 실행 -> ()안의 액션객체가 리듀서로 전달된다
          () => dispatch({ type: "MINUS_ONE" })
        }
      >
        -1
      </button>
    </div>
  );
};

export default App;
