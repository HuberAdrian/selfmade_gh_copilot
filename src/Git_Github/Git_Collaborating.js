import React from 'react'
import Direction from '../components/Direction'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom';

function Git_Collaborating() {
  return (
    <div>
        <Navbar />
        <Link to="/Copilot/Git-Github/Collaborating/Synching">
        <Direction caption="Synching" description="" />
      </Link>
      <Link to="/Copilot/Git-Github/Collaborating/Workflows">
        <Direction caption="Workflows" description="" />
      </Link>
    </div>
  )
}

export default Git_Collaborating