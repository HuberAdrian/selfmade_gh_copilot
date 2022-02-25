import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Basics_Arrays() {
  return (
    <div>
    <Navbar />
    <Link to="/JavaScript/Basics/Arrays/Functions">
      <Direction caption="Array Functions" description="call functions on Arrays" />
    </Link>
    <Link to="/JavaScript/Basics/Arrays/Destructuring-and-Concatenation">
      <Direction caption="Destructuring and Concatenation" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Objects/Optional-Chaining">
      <Direction caption="Optional Chaining" description="access to a property without risking an error" />
    </Link>
    </div>
  )
}

export default JS_Basics_Arrays