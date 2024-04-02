# Redux 작동흐름

1. View 에서 액션이 일어난다.
2. dispatch 에서 action이 일어나게 된다.
3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.
4. middleware 에서 명령내린 일을 수행하고 난뒤, reducer 함수를 실행한다. (3, 4번은 아직 몰라도 됩니다!)
5. reducer 의 실행결과 store에 새로운 값을 저장한다.
6. store의 state에 subscribe 하고 있던 UI에 변경된 값을 준다.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
