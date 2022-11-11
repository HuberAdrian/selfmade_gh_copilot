import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Components_React() {
  return (
    <div>
        <Navbar />
        <Link to="/Copilot/React/Components/Overall">
            <Direction caption="Overall" description="Syntax, Element vs Component" />
        </Link>
        <Link to="/Copilot/React/Components/Props">
            <Direction caption="Props" description="" />
        </Link>
        <Link to="/Copilot/React/Components/Conditional-Rendering">
            <Direction caption="Conditional Rendering" description="" />
        </Link>
        <a href="https://elderly-forsythia-b52.notion.site/Stateless-vs-Stateful-a23b74b5c076427fa2f50fb89a899e0b" target="_blank">
      <Direction caption="Stateless vs. Stateful" description="Passing functions props, Lifting a state up, Refactoring" />
    </a>
    </div>
  )
}

export default Components_React