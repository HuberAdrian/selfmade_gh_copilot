import React, {useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import "./Navbar.css";

//displays Path, go back and home on the direction pages

function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    
  function handleSearchChange (event) {
    window.find(event)
  }

  return <div className='Navbar'>
            <p>{location.pathname}</p>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate("/")} >Home</button>
            <input type="text" placeholder='Search on page' onChange={event => handleSearchChange(event.target.value)} />
        </div>;
}

export default Navbar;
