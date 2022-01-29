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


    {/* Links with Directions */}
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

    {/* Links with Directions for less used directions*/}
    <Link to="/SEO">
      <Direction caption="SEO & Webperformance" />
    </Link>
    <Link to="/Interview">
      <Direction caption="Interview Preparation" description="HTML, CSS, JS, React, Data Structures, Algorithms,..." />
    </Link>
    <Link to="/Games">
      <Direction caption="Playing Coding Games" />
    </Link>
        
    
    {/* Routes for directions*/}
    <Routes>
      <Route exact path="/Plan-Start" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/HTML-CSS" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/JavaScript" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Media" element={<Home/>} />
    </Routes> 
    <Routes>
      <Route exact path="/Git-Github" element={<Home/>} />
    </Routes>  
    <Routes>
      <Route exact path="/React" element={<Home/>} />
    </Routes>
    
    {/* Routes for less used directions*/}
    <Routes>
      <Route exact path="/SEO" element={<Home/>} />
    </Routes> 
    <Routes>
      <Route exact path="/Interview" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Games" element={<Home/>} />
    </Routes>



      </div>
    );
  }

  export default Home;
