import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Cat() {
    const { cat_name } = useParams();
    console.log(cat_name);
    return (
        <>
            <div>Cat 화면</div>
            <div>고양이 이름은 {cat_name}입니다.</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <Link to="/">Home</Link>
                <Link to="/cat">Cat</Link>
                <Link to="/dog">Dog</Link>
            </div>
        </>
    );
}

export default Cat;
