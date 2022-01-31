import './App.css';
import Home from './components/Home.js';
import {Routes, Route} from "react-router-dom";
import Git_Github from './Git_Github/Git_Github';
import React from 'react';

function App() {
  return (
  <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>} />
    </Routes>


    {/* Routes for directions */}
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
      <Route exact path="/Git-Github" element={<Git_Github />} />
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

    {/*Routes for Git_GitHub*/}
    <Routes>
      <Route exact path="/Git-Github/How-Git-Works/" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Git-Github/Configuration-and-Setup" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Git-Github/Changes" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Git-Github/Tags" element={<Home/>} />
    </Routes>
    <Routes>
      <Route exact path="/Git-Github/Branches" element={<Git_Github />} />
    </Routes>  
    <Routes>
      <Route exact path="/Git-Github/Collaborating" element={<Home/>} />
    </Routes>
      
  </div>
  );
}

export default App;
