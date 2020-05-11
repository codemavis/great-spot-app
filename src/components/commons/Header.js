import React from 'react';
import Logo from '../../../src/assets/img/logo.png';
import User from '../../../src/assets/img/user.png';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} alt="logo" />
                {/* <h4 className="logo">great<span>spots</span></h4> */}
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#" className="nav-link">Destinations</a></li>
                    <li><a href="#" className="nav-link">Hiking</a></li>
                    <li><a href="#" className="nav-link">Adventure</a></li>
                    <li><a href="#" className="nav-link">Trucking</a></li>
                </ul>
            </nav>
            <div className="user-container">
                <div className="user-entry">
                    <img src={User} alt="user" />
                    <a href="/login">Login</a>/<a href="">Register</a>
                </div>
                <div className="user-entry" style={{ display: 'none' }}>
                    <img src={User} alt="user" />
                    <a href="">Sujee</a>
                </div>
            </div>
        </header>
    );
}

export default Header;