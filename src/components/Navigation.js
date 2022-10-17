import React from "react";
import { Link } from 'react-router-dom';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" id="header-bg" width="device-width">
      <p className="p">Stephen Mulrow        <footer class="blockquote-footer" className="subP">Full-Stack Developer</footer></p>
      <li className="nav-item" id="navItem">
        <a
          id="navList"
          href="#owner"
          onClick={() => handlePageChange('Owner')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Owner' ? 'nav-link active' : 'nav-link'}
        >
          Owner
        </a>
      </li>
      <li className="nav-item">
        <a
          id="navList"
          href="#chef"
          onClick={() => handlePageChange('Chef')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Chef' ? 'nav-link active' : 'nav-link'}
        >
          Chef
        </a>
      </li>
     
    </ul>
  );
}

export default Navigation;