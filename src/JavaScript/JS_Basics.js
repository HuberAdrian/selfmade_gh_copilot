import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Basics() {
  return (
    <div>
        <Navbar />
    <Link to="/">
      <Direction caption="Documentation" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Basics (personal notes)" description="Operatons on strings, Arrays, Objects, Classes" />
    </Link>
    <Link to="/">
      <Direction caption="Avanced" description="" />
    </Link>
    </div>
  )
}

export default JS_Basics