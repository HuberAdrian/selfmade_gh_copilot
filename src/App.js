import './App.css';
import Home from './components/Home.js';
import {Routes, Route, Navigate} from "react-router-dom";
import Git_Github from './Git_Github/Git_Github.js';
import React from 'react';

function App() {
  console.log("test App");
  return (
  <div className="App">
    <Routes>
      <Route path="/" index element={<Home />} />

      {/* Routes for directions */}
        <Route path="/Plan-Start" element={<Home />} />
        <Route path="/HTML-CSS" element={<Home />} />
        <Route path="/JavaScript" element={<Home />} />
        <Route path="/Media" element={<Home />} />
        <Route path="/Git-Github" element={<Git_Github />} />
        <Route path="/React" element={<Home />} />
        
        {/* Routes for less used directions*/}
        <Route path="/SEO" element={<Home />} />
        <Route path="/Interview" element={<Home />} />
        <Route path="/Games" element={<Home />} />
      

        {/*Routes for Git_GitHub*/}
        <Route path="/Git-Github/How-Git-Works" element={<Navigate replace to="/" />} />
        <Route path="/Git-Github/Configuration-and-Setup" element={<Home />} />
        <Route path="/Git-Github/Changes" element={<Home />} />
        <Route path="/Git-Github/Tags" element={<Home />} />
        <Route path="/Git-Github/Branches" element={<Git_Github />} />
        <Route path="/Git-Github/Collaborating" element={<Home />} />  
  



    </Routes>
  
      
  </div>
  );
}

export default App;
