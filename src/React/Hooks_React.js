import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Hooks_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Hooks/useState">
            <Direction caption="useState" description="" />
        </Link>
        <Link to="/React/Hooks/useEffect">
            <Direction caption="useEffect" description="" />
        </Link>
        <Link to="/React/Hooks/useLayoutEffect">
            <Direction caption="useLayoutEffect" description="" />
        </Link>
        <Link to="/React/Hooks/Custom">
            <Direction caption="Custom Hooks" description="" />
        </Link>
        <Link to="/React/Hooks/State-Effect">
            <Direction caption="State inside effect" description="" />
        </Link>
    </div>
  )
}

export default Hooks_React