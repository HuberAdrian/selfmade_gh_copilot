import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_React_Router() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/React-Router-Dom/V6">
        <Direction caption="React-Router-Dom V6" description="navigate within a react-app" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4">
        <Direction caption="React-Router-Dom V4" description="navigate within a react-app" />
        </Link>
    </div>
  )
}

export default Tools_React_Router