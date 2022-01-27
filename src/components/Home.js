import React from 'react';
import Direction from './Direction';
import "./Home.css"
import SearchBar from './SearchBar';

function Home() {
    return (
      <div className='Home'>
        <h1>Selfmade Github Copilot*</h1>
        <h4>*for Web development</h4>
        <SearchBar placeholder="Search for keywords" data="test" />
        <Direction caption="HTML, CSS" description="Cheatsheets, Templates, ..." colour="red" />
        <Direction caption="JavaScript" description="Cheatsheets, Templates, ..." colour="green" />
      </div>
    );
  }

  export default Home;
