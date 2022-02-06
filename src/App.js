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
      <Route path="/" element={<Home />} />

      {/* Routes for directions */}
        <Route path="/Plan-Start" element={<Home />} />
        <Route path="/HTML-CSS" element={<Home />} />
        <Route path="/JavaScript" element={<Home />} />
        <Route path="/Media" element={<Home />} />
        <Route path="/Git-Github/*" element={<Git_Github />}>
          
        
          
        </Route> 
        <Route path="/React" element={<Home />} />
        
        
        {/* Routes for less used directions*/}
      
        <Route path="/SEO" element={<Home />} />
        <Route path="/Interview" element={<Home />} />
        <Route path="/Games" element={<Home />} />
      
    </Routes>
  
      
  </div>
  );
}

export default App;
