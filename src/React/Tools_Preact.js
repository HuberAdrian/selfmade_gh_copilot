import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_Preact() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/Preact/Overview">
        <Direction caption="Overview" description="what it is, when to use" />
        </Link>
        <Link to="/React/Tools-Libraries/Preact/App-from-Scratch">
        <Direction caption="Start App from scratch" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Preact/Move-to">
        <Direction caption="Migrating project to Preact" description="" />
        </Link>
    </div>
  )
}

export default Tools_Preact