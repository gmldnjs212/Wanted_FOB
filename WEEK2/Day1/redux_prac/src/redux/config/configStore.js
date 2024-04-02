import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/Counter';

const rootReducer = combineReducers({
    // 2. 리듀서에 모듈을 추가하는 방식으로 명시
    counter,
});
const store = createStore(rootReducer);

export default store;
