import { createContext, useContext, useState } from 'react';
import './App.css';

// 상태관리를 해보자
// 이름을 입력하고 바꾸기를 누르면 바뀌도록 해보자

const MyStore = createContext();

const MyStoreConsumer = () => {
    const { name, setName } = useContext(MyStore);
    return (
        <div>
            {name}
            <button onClick={() => setName('고양이')}>바꾸기</button>
        </div>
    );
};

function App() {
    // Context의 Value는 App 컴포넌트에서 관리
    const [name, setName] = useState('강아지');
    return (
        <MyStore.Provider value={{ name, setName }}>
            <MyStoreConsumer />
        </MyStore.Provider>
    );
}

export default App;
