import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/header.scss';
import Logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <Link to={'/'}>
            <img src={Logo} className="header-logo__part" alt="Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
