import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Fetch_React() {
  return (
    <div>
      <Navbar />
        <Link to="/React/JSX">
            <Direction caption="JSX" description="" />
        </Link>
        <Link to="/React/JSX">
            <Direction caption="JSX" description="" />
        </Link>
    </div>
  )
}

export default Fetch_React