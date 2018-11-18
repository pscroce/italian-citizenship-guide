import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <nav className="primary-nav">
        <h3><Link to="/">Italian Citizenship Guide</Link><sup>BETA</sup></h3>
        <div className="nav-right">
          
        </div>
      </nav>
    </header>
  )
}
// <Link to="guide">Complete Guide</Link>


export default Header;
