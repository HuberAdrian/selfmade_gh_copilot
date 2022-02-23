import React from 'react';
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JavaScript_Dir() {
  return <div>
    <Navbar />
    <Link to="/">
      <Direction caption="Documentation" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Basics (personal notes)" description="Operatons on strings, Arrays, Objects, Classes" />
    </Link>
    <Link to="/">
      <Direction caption="Asynchronous callbacks" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Fetch API and JSON" description="Buttons, Navbars" />
    </Link>
    <Link to="/">
      <Direction caption="Best practices" description="" />
    </Link>
  </div>;
}

export default JavaScript_Dir;

