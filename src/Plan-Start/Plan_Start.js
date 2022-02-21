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
  </div>;
}

export default Plan_Start;
