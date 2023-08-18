import React from 'react';
import './Header.css'; // You can create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">E-commerce Product Showcase</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
