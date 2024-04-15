import styled from 'styled-components';
import Header from './components/common/Header';
import List from './pages/List';

function App() {
    return (
        <Layout>
            <Header />
            <List />
        </Layout>
    );
}

export default App;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
