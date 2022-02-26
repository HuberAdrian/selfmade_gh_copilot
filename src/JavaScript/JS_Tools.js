import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Tools() {
  return (
    <div>
    <Navbar />
    <Link to="/JavaScript/Tools/Module-Bundlers">
      <Direction caption="Module Bundlers" description="understands imports and merges files together" />
    </Link>
    <Link to="/JavaScript/Tools/EcmaScript">
      <Direction caption="EcmaScript" description="" />
    </Link>
    <Link to="/JavaScript/Tools/Package-Managers">
      <Direction caption="Package Managers" description="" />
    </Link>
    <Link to="/JavaScript/Tools/ESLint">
      <Direction caption="ESLint" description="" />
    </Link>
    </div>
  )
}

export default JS_Tools