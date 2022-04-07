import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <ul style={{listStyleType:"none"}}>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/favorites">
                    <li>Favorites</li>
                </Link>
                <Link to="/create/character">
                    <li>Create</li>
                </Link>   
            </ul>
        </div>
    );
}

export default NavBar;
