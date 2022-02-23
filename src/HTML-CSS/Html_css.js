import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Html_css() {
  return (
    <div>
        <Navbar />
    <Link to="/">
      <Direction caption="Documentation HTML" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Documentation CSS" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Templates" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Generators" description="Buttons, Navbars" />
    </Link>
    <Link to="/">
      <Direction caption="Best practices" description="" />
    </Link>
    </div>
  )
}

export default Html_css