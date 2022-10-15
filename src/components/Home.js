import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom';
import Owner from './Owner'


export default function Home(){
  return(
    <div>
    <h1>Welcome to Pizza Planet!</h1>
    <h2>Please select your role</h2>
    <Link to='/owner'>
    <button type="button">Shop Owner</button>
    </Link>
    <br></br>
    <br></br>
    <Link to='/chef'>
    <button>Pizza Chef</button>
    </Link>
    </div>
  
      )
}