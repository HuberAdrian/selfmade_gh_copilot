import React from 'react';
import "./Home.css"
import SearchBar from './SearchBar';

function Home() {
    return (
      <div className='Home'>
        <h1>Selfmade Github Copilot*</h1>
        <h4>*for Web development</h4>
        <SearchBar placeholder="Search for keywords" data="test" />
      </div>
    );
  }

  export default Home;
