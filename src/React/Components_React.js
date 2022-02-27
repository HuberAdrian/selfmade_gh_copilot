import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Components_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Components/Overall">
            <Direction caption="Overall" description="Syntax, Element vs Component" />
        </Link>
        <Link to="/React/Components/Props">
            <Direction caption="Props" description="" />
        </Link>
        <Link to="/React/Components/Conditional-Rendering">
            <Direction caption="Conditional Rendering" description="" />
        </Link>
    </div>
  )
}

export default Components_React