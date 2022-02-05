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
      <Route path="/" element={<Home />}> </Route>

      {/* Routes for directions */}
        <Route path="/Plan-Start" element={<Home />} />
        <Route path="/HTML-CSS" element={<Home />} />
        <Route path="/JavaScript" element={<Home />} />
        <Route path="/Media" element={<Home />} />
        <Route path="/Git-Github/*" element={<Git_Github />}>
          
                {/*Routes for Git_GitHub*/}
                
              <Route path="How-Git-Works" element={<Navigate to="/" />} />
              <Route path="Configuration-and-Setup" element={<Home />} />
              <Route path="Changes" element={<Home />} />
              <Route path="Tags" element={<Home />} />
              <Route path="Branches" element={<Git_Github />} />
              <Route path="Collaborating" element={<Home />} />
          
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
