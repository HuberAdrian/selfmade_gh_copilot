import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function UseEffect_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Hooks/useEffect/Intro">
            <Direction caption="Intro" description="Intro, Example, Rules" />
        </Link>
        <Link to="/React/Hooks/useEffect/CleanUp">
            <Direction caption="Effect with clean up" description="Some JavaScript methods require cleanup" />
        </Link>
        <Link to="/React/Hooks/useEffect/Dependencies">
            <Direction caption="Effect dependencies" description="run useEffect on certain re-render functions" />
        </Link>
    </div>
  )
}

export default UseEffect_React