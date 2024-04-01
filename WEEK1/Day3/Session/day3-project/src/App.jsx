import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: '#bbb',
                padding: '20px',
            }}
        >
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
