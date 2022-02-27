import { Link } from 'react-router-dom';
import React from 'react';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Plan_Start() {
  return <div>
    <Navbar />
    <Link to="/">
      <Direction caption="Checklist before you start" description="" />
    </Link>
    <Link to="/">
      <Direction caption="create-react-app" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Ideas/ Inspiration" description="" />
    </Link>
    <Link to="/">
      <Direction caption="Components Websites should have" description="" />
    </Link>
  </div>;
}

export default Plan_Start;
