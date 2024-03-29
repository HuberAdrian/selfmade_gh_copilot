import React from 'react';
import "./Git_Github.css";
import Direction from '../components/Direction';
import Divider from '../components/Divider';
import SearchBar from '../components/SearchBar';
import {Link} from "react-router-dom";
import Home from '../components/Home.js';
import Navbar from '../components/Navbar';

function Git_Github() {
  return <div className="Git_Github">
      <Navbar />
      <Link to="/Copilot/Git-Github/How-Git-Works">
        <Direction caption="How Git works" description="" />
      </Link>
      <Link to="/Copilot/Git-Github/Configuration-and-Setup">
        <Direction caption="Configuration and setup" description="" />
      </Link>
      <a href="https://elderly-forsythia-b52.notion.site/Safe-Compare-Undo-Changes-2452007db2a343e8b09a6ff0808ded77" rel="noopener noreferrer" target="_blank">
      <Direction caption="save, compare, undo Commits" description="" />
      </a>
      <a href="https://elderly-forsythia-b52.notion.site/Compare-Commits-Inspecting-Repository-e5a22d63f2774b518a811f53a7a3900a" rel="noopener noreferrer" target="_blank">
      <Direction caption="Compare Commits, Inspecting Repository" description="" />
      </a>
      <Link to="/Copilot/Git-Github/GitIgnore">
      <Direction caption=".gitignore" description="exclude certain files from the repository" />
      </Link>
      <Link to="/Copilot/Git-Github/Tags">
      <Direction caption="Tags" description="" />
      </Link>
      <Link to="/Copilot/Git-Github/Branches">
        <Direction caption="Branches" description="" />
      </Link>
      <Link to="/Copilot/Git-Github/Collaborating">
        <Direction caption="Collaborating" description="" />
      </Link>
      <Divider />
      <a href="https://readme.so" rel="noopener noreferrer" target="_blank">
      <Direction caption="Create README" description="Browser Editor for Markdown files with preview" />
      </a>
      
        
    
  </div>;
}

export default Git_Github;