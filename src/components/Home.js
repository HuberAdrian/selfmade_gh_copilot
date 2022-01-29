import React from 'react';
import Direction from './Direction';
import Divider from './Divider';
import SearchBar from './SearchBar';
import "./Home.css"
import {Routes, Route, Link} from "react-router-dom";

function Home() {
    return (
    <div>    
    <h1>Selfmade Github Copilot*</h1>
    <h4>*for Web development</h4>

    <SearchBar placeholder="Search for keywords" data="test" />

    <Link to="/Plan-Start">
      <Direction caption="Plan, Start a Project" description="CRA Doc, Inspiration, ..." />
    </Link>
    <Link to="/HTML-CSS">
      <Direction caption="HTML, CSS" description="Templates, UI Components, Cheatsheets..." />
    </Link>
    <Link to="/JavaScript">
      <Direction caption="JavaScript" description="Cheatsheets, Templates, Docs..." />
    </Link>
    <Link to="/Media">
      <Direction caption="Media" description="Pictures, Videos, Fonts, Icons, Chart libraries ..." />
    </Link> 
    <Link to="/Git-Github">
      <Direction caption="Git / GitHub"/>
    </Link>
    <Link to="/React">
      <Direction caption="React" description="Cheatsheets, Templates, Docs..." />
    </Link>     
        
    <Divider />

    <Link to="/SEO">
      <Direction caption="SEO & Webperformance" />
    </Link>
    <Link to="/Interview">
      <Direction caption="Interview Preparation" description="HTML, CSS, JS, React, Data Structures, Algorithms,..." />
    </Link>
    <Link to="/SEO">
      <Direction caption="Playing Coding Games" />
    </Link>
        
                


      </div>
    );
  }

  export default Home;
