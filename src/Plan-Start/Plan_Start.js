import { Link } from 'react-router-dom';
import React from 'react';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Plan_Start() {
  return <div>
    <Navbar />
    <Link to="/Copilot/Plan-Start/Checklist">
      <Direction caption="Checklist before you start" description="" />
    </Link>
    <a href="https://elderly-forsythia-b52.notion.site/CRA-Create-React-App-0dd82cad7b7342fa92d4f978f67f7b9b" rel="noopener noreferrer" target="_blank">
      <Direction caption="create-react-app" description="" />
    </a> 
    <Link to="/Copilot/Plan-Start/Ideas">
      <Direction caption="Ideas/ Inspiration" description="" />
    </Link>
  </div>;
}

export default Plan_Start;
