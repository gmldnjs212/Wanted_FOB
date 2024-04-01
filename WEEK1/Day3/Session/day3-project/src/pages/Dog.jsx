import React from 'react';
import { Link } from 'react-router-dom';

function Dog() {
    return (
        <>
            <div>Dog 화면</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <Link to="/">Home</Link>
                <Link to="/cat">Cat</Link>
                <Link to="/dog">Dog</Link>
            </div>
        </>
    );
}

export default Dog;
