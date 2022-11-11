import React from 'react';
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JavaScript_Dir() {
  return <div>
    <Navbar />
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener noreferrer" target="_blank">
      <Direction caption="Documentation" description="" />
    </a>
    <Link to="/Copilot/JavaScript/Basics">
      <Direction caption="Basics (personal notes)" description="Operatons on strings, Arrays, Objects, Classes, Functions" />
    </Link>
    <Link to="/CopilotCopilot//JavaScript/Advanced">
      <Direction caption="Avanced (personal notes)" description="" />
    </Link>
    <Link to="/Copilot/JavaScript/How-JS-works">
      <Direction caption="How JS works under the hood" description="" />
    </Link>
    <Link to="/Copilot/JavaScript/Tools">
      <Direction caption="Tools" description="to make development simpler" />
    </Link>
    <Link to="/Copilot/">
      <Direction caption="Best practices" description="" />
    </Link>
  </div>;
}

export default JavaScript_Dir;

