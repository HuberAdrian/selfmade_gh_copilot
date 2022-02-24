import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Basics_Objects() {
  return (
    <div>
        <Navbar />
    <Link to="/JavaScript/Basics/Objects/reading-dynamic-Properties">
      <Direction caption="Reading dynamic properties" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Objects/Functions">
      <Direction caption="Functions" description="call functions on objects" />
    </Link>
    <Link to="/JavaScript/Basics/Objects/Destructuring-and-Concatenation">
      <Direction caption="Destructuring and Concatenation" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Objects/Optional-Chaining">
      <Direction caption="Optional Chaining" description="access to an property" />
    </Link>
    <Link to="/JavaScript/Basics/Objects/Immutability">
      <Direction caption="Immutability" description="" />
    </Link>
    </div>
  )
}

export default JS_Basics_Objects