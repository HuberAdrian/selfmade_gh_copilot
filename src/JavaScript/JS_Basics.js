import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Basics() {
  return (
    <div>
        <Navbar />
    <Link to="/JavaScript/Basics/Strings">
      <Direction caption="Strings" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Arrays">
      <Direction caption="Arrays" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Objects">
      <Direction caption="Objects" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes">
      <Direction caption="Classes" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Functions">
      <Direction caption="Functions" description="Arrow Functions, passing Functions as arguments" />
    </Link>
    </div>
  )
}

export default JS_Basics