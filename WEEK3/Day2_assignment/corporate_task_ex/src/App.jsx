import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';
import router from './router/router';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header />
                {router}
            </Layout>
        </BrowserRouter>
    );
}

export default App;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
