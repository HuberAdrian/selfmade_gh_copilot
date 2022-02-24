import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Basics_Classes() {
  return (
    <div>
    <Navbar />
    <Link to="/JavaScript/Basics/Classes/Basics">
      <Direction caption="Basics" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes/Getters-Setters">
      <Direction caption="Getters & Setters" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes/Static-Methods-and-Chaining">
      <Direction caption="Statics Methods and Chaining" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes/Inheritance-and-extend">
      <Direction caption="inheritance and class extend" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes/Class-vs-Function">
      <Direction caption="Class vs Function" description="" />
    </Link>
    <Link to="/JavaScript/Basics/Classes/Public-Private">
      <Direction caption="public and private class fields" description="" />
    </Link>
    </div>
  )
}

export default JS_Basics_Classes