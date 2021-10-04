import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="menu-container header-img conatainer-fluid">
        <ul>
          <Link to="/home" className="items">
           Home
          </Link>
          <Link to="/services" className="items">
            Services
          </Link>
          <Link to="/about" className="items">
            About us
          </Link>
          <Link to="/detials" className="items">
            Detials
          </Link>
        </ul>
    </div>
    );
};

export default Header;