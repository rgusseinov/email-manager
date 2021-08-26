import React from 'react';
import './header.sass'
import Ellipse from '../../assets/images/Ellipseellipse.svg'
import Rectangle from '../../assets/images/Rectanglerectanble.svg'
import Rectangle2 from '../../assets/images/Rectanglerectangle-2.svg'


function Header(){
  return (
    <div className="header">
      <div className="container">
        <div className="header_row">
          <img src={Ellipse} className="header-logo__part" alt="" />
          <img src={Rectangle} className="header-logo__part" alt=""/>
          <img src={Ellipse} className="header-logo__part" alt=""/>
          <img src={Rectangle2} className="header-logo__part" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;