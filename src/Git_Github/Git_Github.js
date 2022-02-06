import React from 'react';
import "./Git_Github.css";
import Direction from '../components/Direction';
import Divider from '../components/Divider';
import SearchBar from '../components/SearchBar';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import Home from '../components/Home.js';

function Git_Github() {
  console.log("GITHUB")
  return <div className="Git_Github">
      <Link to="/Git-Github/How-Git-Works">
        <Direction caption="How Git works" description="" />
      </Link>
      <Link to="/Git-Github/Configuration-and-Setup">
        <Direction caption="Configuration and setup" description="" />
      </Link>
      <Link to="/Git-Github/Changes">
        <Direction caption="save, compare, ... Changes" description="" />
      </Link>
      <Link to="/Git-Github/Tags">
      <Direction caption="Tags" description="" />
      </Link>
      <Link to="/Git-Github/Branches">
        <Direction caption="Branches" description="" />
      </Link>
      <Link to="/Git-Github/Collaborating">
        <Direction caption="Collaborating" description="" />
      </Link>



        {/*Routes for Git_GitHub*/}
        <Routes>
              <Route path="How-Git-Works" element={<Navigate replace to="/" />} />
              <Route path="Configuration-and-Setup" element={<Home />} />
              <Route path="Changes" element={<Home />} />
              <Route path="Tags" element={<Home />} />
              <Route path="Branches" element={<Git_Github />} />
              <Route path="Collaborating" element={<Home />} />  
          
        </Routes>      
        
    
  </div>;
}

export default Git_Github;