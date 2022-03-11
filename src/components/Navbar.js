import React, {useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import "./Navbar.css";

//displays Path, go back and home on the direction pages

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

  return <div className='Navbar'>
            <p>{location.pathname}</p>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate("/")} >Home</button>
        </div>;
}

export default Navbar;
