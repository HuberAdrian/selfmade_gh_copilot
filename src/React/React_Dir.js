import React from 'react';
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';
import Divider from '../components/Divider';

function React_Dir() { 
  return <div>
      <Navbar />
    <a href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer" target="_blank">
      <Direction caption="Documentation" description="" />
    </a>
    <Link to="/React/Introduction-and-Install">
      <Direction caption="Introduction & Install" description="" />
    </Link>
    <Link to="/React/JSX">
      <Direction caption="JSX" description="" />
    </Link>
    <Link to="/React/Components">
      <Direction caption="Components" description="Components, props, conditional rendering, stateless vs stateful" />
    </Link>
    <Link to="/React/Hooks">
      <Direction caption="Hooks" description="" />
    </Link>
    <Link to="/React/User-Input">
      <Direction caption="User Input" description="" />
    </Link>
    <Link to="/React/Fetch">
      <Direction caption="Fetch API in React" description="" />
    </Link>
    <Link to="/React/refs">
      <Direction caption="refs" description="" />
    </Link>
    <Link to="/React/Context">
      <Direction caption="Context (global States)" description="" />
    </Link>
    <Link to="/React/Tools-Libraries">
      <Direction caption="Tools and Libraries" description="" />
    </Link>

    <Divider />
    <Link to="/React/Local-Storage">
      <Direction caption="Local Storage" description="" />
    </Link>
    <Link to="/React/Lazy">
      <Direction caption="React Lazy" description="" />
    </Link>
    <Link to="/React/Class-Components">
      <Direction caption="Class Components" description="" />
    </Link>
    <Link to="/React/Styles">
      <Direction caption="Styles in React" description="" />
    </Link>
    <Link to="/React/Synthetic-Events">
      <Direction caption="Synthetic Events" description="" />
    </Link> 
    
  </div>;
}

export default React_Dir;
