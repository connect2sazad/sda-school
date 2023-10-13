import React from "react";
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return (
        <>
            <div className="menubar-container">

                <div className="logo">
                    <img src="https://a8x8k3g3.rocketcdn.me/wp-content/uploads/2023/03/logo.webp" />
                </div>

                <Menus />
            </div>
        </>
    );
}

export default MenuBar;


const Menus = () => {
    return (
        <>
            <div className="menus">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}