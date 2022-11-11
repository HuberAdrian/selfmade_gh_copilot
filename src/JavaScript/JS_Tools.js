import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Tools() {
  return (
    <div>
    <Navbar />
    <Link to="/Copilot/JavaScript/Tools/Module-Bundlers">
      <Direction caption="Module Bundlers" description="understands imports and merges files together" />
    </Link>
    <Link to="/Copilot/JavaScript/Tools/EcmaScript">
      <Direction caption="EcmaScript" description="" />
    </Link>
    <Link to="/Copilot/JavaScript/Tools/Package-Managers">
      <Direction caption="Package Managers" description="" />
    </Link>
    <Link to="/Copilot/JavaScript/Tools/ESLint">
      <Direction caption="ESLint" description="" />
    </Link>
    <Link to="/Copilot/JavaScript/Tools/APIs">
      <Direction caption="APIs" description="APIs, Ressources, ..." />
    </Link>
    </div>
  )
}

export default JS_Tools