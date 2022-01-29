import React from 'react';
import Direction from './Direction';
import "./Home.css"
import SearchBar from './SearchBar';
import Divider from './Divider';

function Home() {
    return (
      <div className='Home'>
        <h1>Selfmade Github Copilot*</h1>
        <h4>*for Web development</h4>

        <SearchBar placeholder="Search for keywords" data="test" />
        <Direction caption="Plan, Start a Project" description="CRA Doc, Inspiration, ..." />
        <Direction caption="HTML, CSS" description="Templates, UI Components, Cheatsheets..." />
        <Direction caption="JavaScript" description="Cheatsheets, Templates, Docs..." />
        <Direction caption="Media" description="Pictures, Videos, Fonts, Icons, Chart libraries ..." />
        <Direction caption="Git / GitHub"/>
        <Direction caption="React" description="Cheatsheets, Templates, Docs..." />

        <Divider />

        <Direction caption="SEO & Webperformance" />
        <Direction caption="Interview Preparation" description="HTML, CSS, JS, React, Data Structures, Algorithms,..." />
        <Direction caption="Playing Coding Games" />        


      </div>
    );
  }

  export default Home;
