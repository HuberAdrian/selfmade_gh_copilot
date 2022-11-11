import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JS_Advanced() {
  return (
    <div>
      <Navbar />
      <Link to="/Copilot/JavaScript/Advanced/Nullish-Coalescing">
        <Direction caption="Nullish coalescing" description="?? operator, allows to default to a certain value" />
      </Link>
      <Link to="/Copilot/JavaScript/Advanced/Try-Catch">
        <Direction caption="Try...catch" description="" />
      </Link>
      <Link to="/Copilot/JavaScript/Advanced/Asynchronous-Callbacks">
        <Direction caption="Asynchronous Callbacks" description="" />
      </Link>
      <Link to="/Copilot/JavaScript/Advanced/Fetch-and-JSON">
        <Direction caption="Fetch APi & JSON" description="" />
      </Link>
      <Link to="/Copilot/JavaScript/Advanced/ES-Modules">
        <Direction caption="ES Modules" description="Export, Import JS code, dynamic Imports" />
      </Link>
      <a href="https://elderly-forsythia-b52.notion.site/HTML-JavaScript-76b981a7c2164d6b81cc1b8ab1951049" rel="noopener noreferrer" target="_blank">
      <Direction caption="HTML in JS" description="select elements, perform actions" />
    </a>
      
      <Link to="/Copilot/JavaScript/Advanced/forLoop">
        <Direction caption="for loop" description=" counting, loop over arrays" />
      </Link>
      <a href="https://elderly-forsythia-b52.notion.site/Intro-to-Web-Components-f5439fe15535407f899d2df851192fb5" rel="noopener noreferrer" target="_blank">
      <Direction caption="Web Components" description="create your own reusable HTML elements" />
    </a>
      <Link to="/Copilot/JavaScript/Advanced/IFFEE">
        <Direction caption="IFFEE" description="functions wrapped in brackets (), legacy code " />
      </Link>
    </div>
  )
}

export default JS_Advanced