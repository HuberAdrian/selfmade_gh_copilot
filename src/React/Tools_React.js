import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_React() {
  return (
    <div>
        <Link to="/React/JSX">
        <Direction caption="JSX" description="" />
        </Link>
        <Link to="/React/JSX">
        <Direction caption="JSX" description="" />
        </Link>
    </div>
  )
}

export default Tools_React