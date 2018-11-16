import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h3><Link to="/">Italian Citizenship Guide</Link></h3>
      <div className="nav-right">
      <Link to="guide">Complete Guide</Link>
      <a href="https://github.com/pscroce/italian-citizenship-guide" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  )
}

export default Header;
