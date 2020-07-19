import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Car Rental Shop</Link>
        <div className="collpase navbar-collapse justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">All Cars</Link>
            </li>
            <li className="navbar-item">
              <Link to="/add" className="nav-link">Add new Car</Link>
            </li>
            <li className="navbar-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}