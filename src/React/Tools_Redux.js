import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_Redux() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/Redux/Intro">
        <Direction caption="Intro" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Redux/Setup">
        <Direction caption="Setup" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Redux/Toolkit">
        <Direction caption="Redux Toolkit" description="" />
        </Link>
    </div>
  )
}

export default Tools_Redux