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
            {/* 목록 영역 */}
            <ul className="todoItems">
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
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
        </div>
    );
}

export default App;
