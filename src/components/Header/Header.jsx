import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           <Link to="/" >Home</Link>
           <Link to="/review" >Order_Review</Link>
           <Link to="/grandpa" >Grandpa</Link>
           <Link to="/contact" >Contact</Link>
        </nav>
    );
};

export default Header;