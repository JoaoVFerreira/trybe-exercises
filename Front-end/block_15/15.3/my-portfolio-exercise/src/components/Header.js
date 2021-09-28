import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
        <Link className="header-link" to="/" >Home</Link>
        <Link className="header-link" to="/about" >About</Link>
        <Link className="header-link" to="/contact" >Contact</Link>
        <Link className="header-link" to="/projects" >Projects</Link>
      </header>
    )
  }
}

export default Header;