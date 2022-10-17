import React from "react";
import { Link } from 'react-router-dom';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="homepage">
    <ul className="nav nav-tabs" id="header-bg" width="device-width">
      <p className="p">Welcome to Pizza Planet!<footer class="blockquote-footer" className="subP">Please click your role below. Then, follow the instructions to best manage your pizza!</footer></p>
      <li className="nav-item" id="navItem">
        <a
          id="navList"
          href="#owner"
          onClick={() => handlePageChange('Owner')}
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
          className={currentPage === 'Chef' ? 'nav-link active' : 'nav-link'}
        >
          Chef
        </a>
      </li>
     
    </ul>
    </div>
  );
}

export default Navigation;