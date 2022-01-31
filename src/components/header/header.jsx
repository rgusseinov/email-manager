import React from 'react';
import Logo from '../../assets/images/logo.svg';
import '../../scss/header.scss';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <img src={Logo} className="header-logo__part" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
