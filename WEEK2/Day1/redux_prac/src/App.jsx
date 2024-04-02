import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    // 3. useSelector를 사용하여 스토어를 추가
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch(); // 4. dispath 생성
    return (
        <>
            <div>
                {/* 5. 버튼을 하나 추가하기 */}
                number : {number} <br />
                <button
                    // 6. 이벤트 핸들러 추가
                    // : 클릭하면 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달됨
                    onClick={() => {
                        dispatch({ type: 'PLUS_ONE' });
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: 'MINUS_ONE' });
                    }}
                >
                    -1
                </button>
            </div>
        </>
    );
}

export default App;
