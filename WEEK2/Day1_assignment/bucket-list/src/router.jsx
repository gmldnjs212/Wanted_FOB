import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    id: 1,
    path: '/detail/:item',
    element: <Detail />,
  },
]);

export default router;
