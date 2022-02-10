import React from 'react';
import "./Git_Github.css";
import Direction from '../components/Direction';
import Divider from '../components/Divider';
import SearchBar from '../components/SearchBar';
import {Routes, Route, Link, Navigate} from "react-router-dom";
import Home from '../components/Home.js';
import Navbar from '../components/Navbar';

function Git_Github() {
  return <div className="Git_Github">
      <Navbar />
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

        
    
  </div>;
}

export default Git_Github;