import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts)
    return (
        <div>
            <h2>This is home section: {tshirts.length}</h2>
        </div>
    );
};

export default Home;