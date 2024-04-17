import { Routes, Route } from 'react-router-dom';
import List from '../pages/List';
import Detail from '../pages/Detail';

const router = (
    <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:postId" element={<Detail />} />
    </Routes>
);

export default router;
