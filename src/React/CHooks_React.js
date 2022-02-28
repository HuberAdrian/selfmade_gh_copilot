import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function CHooks_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Hooks/Custom/Intro">
            <Direction caption="Intro" description="Intro, Example, Rules" />
        </Link>
        <Link to="/React/Hooks/Custom/Parameters">
            <Direction caption="Custom Hooks with Parameters" description="" />
        </Link>
        <Link to="/React/Hooks/Custom/State">
            <Direction caption="Custom Hooks with state" description="" />
        </Link>
        <Link to="/React/Hooks/Custom/useFetch">
            <Direction caption="Custom useFetch Hook" description="" />
        </Link>
    </div>
  )
}

export default CHooks_React