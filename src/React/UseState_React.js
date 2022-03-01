import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function UseState_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Hooks/useState/Intro">
            <Direction caption="Intro" description="Intro, Example, Rules" />
        </Link>
        <Link to="/React/Hooks/useState/Change-State">
            <Direction caption="Change States" description="" />
        </Link>
        <Link to="/React/Hooks/useState/Arrays">
            <Direction caption="States with complex types" description="with arrays, objects, array of objects" />
        </Link>
        <Link to="/React/Hooks/useState/Functional">
            <Direction caption="Functional State updates" description="if component doesn't re-render" />
        </Link>
    </div>
  )
}

export default UseState_React