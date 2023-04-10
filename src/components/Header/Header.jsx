import React from 'react';
import './Header.css';
// image import
import imgIcon from '../../img/ibrahim.png';

const Header = () => {
  return (
    <nav className="header">
      <h2>Knowledge Cafe</h2>
      
      <div className="header-img">
        <img src={imgIcon} />
      </div>
    </nav>
  );
};

export default Header;