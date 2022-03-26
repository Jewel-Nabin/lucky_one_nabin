import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1>Packaged Water Business</h1>
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;