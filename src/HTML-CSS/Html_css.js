import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Html_css() {
  return (
    <div>
        <Navbar />
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noopener noreferrer" target="_blank">
      <Direction caption="Documentation HTML" description="" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noopener noreferrer" target="_blank">
      <Direction caption="Documentation CSS" description="" />
    </a>
    <Link to="/Plan-Start/Ideas">
      <Direction caption="Templates" description="" />
    </Link>
    <Link to="/HTML-CSS/Generators">
      <Direction caption="Generators" description="Buttons, Navbars" />
    </Link>
    <Link to="/HTML-CSS/Generators/best-practices">
      <Direction caption="Best practices" description="" />
    </Link>
    </div>
  )
}

export default Html_css