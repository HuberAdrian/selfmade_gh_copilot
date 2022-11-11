import React from 'react';
import Direction from './Direction';
import Divider from './Divider';
import SearchBar from './SearchBar';
import "./SearchBar.css";
import "./Home.css";
import {Routes, Route, Link} from "react-router-dom";
import Git_Github from '../Git_Github/Git_Github';
import SearchData from "./Searchbar_Data.json"

function Home() {
    console.log("test Home");
    return ( 
      
    <div className='home'>   
    <h1>Selfmade Github Copilot*</h1> 
    <h4>*for Web development</h4>
  
    <SearchBar placeholder="Search for keywords" data={SearchData} />


    {/* Links with Directions */}
    <Link to="/Copilot/Plan-Start">
      <Direction home={false} caption="Plan, Start a Project" description="CRA Doc, Inspiration, ..." />
    </Link>
    <Link to="/Copilot/HTML-CSS">
      <Direction home={false} caption="HTML, CSS" description="Templates, UI Components, Cheatsheets..." />
    </Link>
    <Link to="/Copilot/JavaScript">
      <Direction home={false} caption="JavaScript" description="Cheatsheets, Docs, best Practices..." />
    </Link>
    <Link to="/Copilot/React">
      <Direction home={false} caption="React" description="Cheatsheets, Templates, Docs..." />
    </Link> 
    <Link to="/Copilot/Git-Github">
      <Direction home={false} caption="Git / GitHub"/>
    </Link>
    <Link to="/Copilot/Media">
      <Direction home={false} caption="Media" description="Pictures, Videos, Fonts, Icons, Chart libraries ..." />
    </Link> 
    <a href="https://elderly-forsythia-b52.notion.site/Intro-to-testing-28e8b1b457b742cfbb4e9e289e70384e" rel="noopener noreferrer" target="_blank">
      <Direction home={false} caption="Testing" description="Jest, etc" />
    </a>     
    
    <Divider home={false} />

    {/* Links with Directions for less used directions*/}
    <Link to="/Copilot/SEO">
      <Direction home={false} caption="SEO & Webperformance" />
    </Link>
    <Link to="/Copilot/Interview">
      <Direction home={false} caption="Interview Preparation" description="HTML, CSS, JS, React, Data Structures, Algorithms,..." />
    </Link>
    <a href="https://serverless.css-tricks.com" rel="noopener noreferrer" target="_blank">
      <Direction home={false} caption="Serverless" description="" />
      </a>
    

    </div>
    );
  }

  export default Home;
