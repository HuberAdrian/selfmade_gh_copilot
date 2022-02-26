import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_How_JS_works() {
  return (
    <div>
    <Navbar />
    <Link to="/JavaScript/How-JS-works/Closure">
      <Direction caption="Closure" description="The scope of inner functions to variables outer functions" />
    </Link>
    <Link to="/JavaScript/How-JS-works/Event-Loop">
      <Direction caption="Event loop" description="Explains callstack, callback queue, event loop" />
    </Link>
    <Link to="/JavaScript/How-JS-works/ASI">
      <Direction caption="ASI- Automatic Semicolon Insertion" description="" />
    </Link>
    </div>
  )
}

export default JS_How_JS_works