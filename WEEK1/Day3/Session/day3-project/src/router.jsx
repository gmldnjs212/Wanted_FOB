import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cat from './pages/Cat';
import Dog from './pages/Dog';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/cat',
        element: <Cat />,
    },
    {
        id: 1,
        path: '/cat/:name',
        element: <Cat />,
    },
    {
        path: '/dog',
        element: <Dog />,
    },
]);

export default router;
