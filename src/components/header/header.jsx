import React from 'react';
import './header.sass'
import Ellipse from '../../assets/images/Ellipseellipse.svg'
import Rectangle from '../../assets/images/Rectanglerectanble.svg'
import Rectangle2 from '../../assets/images/Rectanglerectangle-2.svg'


function Header(){
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Ellipse} className="header-logo__part"/>
        <img src={Rectangle} className="header-logo__part"/>
        <img src={Ellipse} className="header-logo__part"/>
        <img src={Rectangle2} className="header-logo__part"/>        
      </div>   
    </div>
  );
}

export default Header;