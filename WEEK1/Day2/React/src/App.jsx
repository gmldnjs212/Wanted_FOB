import React, { useRef, useState } from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTodoHandler = () => {
        if (todo.trim() !== '') {
            setTodos([...todos, todo]);
            setTodo('');
            inputRef.current.focus();
        }
    };

    return (
        <div className="App">
            {/* 입력 영역 */}
            <div className="inputGroup">
                <input
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                    className="inputStyle"
                />
                <button className="buttonStyle" onClick={addTodoHandler}>
                    추가하기
                </button>
            </div>
            {/* 목록 영역 */}
            <ul className="todoItems">
                {todos.map((item, index) => (
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'row',
                            border: '1px solid black',
                            padding: '20px 60px 20px 10px',
                        }}
                    >
                        <li key={index}>{item}</li>
                        <button style={{ position: 'absolute', right: '5px' }}>완료</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
