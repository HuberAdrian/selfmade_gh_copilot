import './App.css';
import Home from './components/Home.js';
import {Routes, Route, Navigate} from "react-router-dom";
import Git_Github from './Git_Github/Git_Github.js';
import React from 'react';
import Notion from './components/Notion';
import Git_Collaborating from './Git_Github/Git_Collaborating';
import NotFound from './components/NotFound';
import Plan_Start from './Plan-Start/Plan_Start';
import Html_css from './HTML-CSS/Html_css';
import JavaScript_Dir from './JavaScript/JavaScript_Dir';

function App() {
  
  return (
  <div className="App">
    <Routes>
      <Route path="/" index element={<Home />} />

      {/* Routes for directions */}
        <Route path="/Plan-Start" element={<Plan_Start />} />
        <Route path="/HTML-CSS" element={<Html_css />} />
        <Route path="/JavaScript" element={<JavaScript_Dir />} />
        <Route path="/Media" element={<Home />} />
        <Route path="/Git-Github" element={<Git_Github />} />
        <Route path="/React" element={<Home />} />
        
        {/* Routes for less used directions*/}
        <Route path="/SEO" element={<Home />} />
        <Route path="/Interview" element={<Home />} />
        <Route path="/Games" element={<Home />} />
      

        {/*Routes for Git_GitHub*/}
        <Route path="/Git-Github/How-Git-Works" element={<Notion nav={true} endpoint="001e5bd586fb4a71a8303498527171be" />} />
        <Route path="/Git-Github/Configuration-and-Setup" element={<Notion nav={true} endpoint="8c76bbd5bb8f4662bbe038d93fa39802" />} />
        <Route path="/Git-Github/GitIgnore" element={<Notion nav={true} endpoint="6f8390f7535e4669bb7af8cad05aeaa3" />} />
        <Route path="/Git-Github/Tags" element={<Notion nav={true} endpoint="3c21faf6cf1e4a4a95b5be84c1f07423" />} />
        <Route path="/Git-Github/Branches" element={<Notion nav={true} endpoint="7a3939d2a42c45a3a4ad18c29cec2f33" />} />
        <Route path="/Git-Github/Collaborating" element={<Git_Collaborating />} />  
        <Route path="/Git-Github/Collaborating/Synching" element={<Notion nav={true} endpoint="b6674d34c9554ee4bb196480fdbe5156" />} />
        <Route path="/Git-Github/Collaborating/Workflows" element={<Notion nav={true} endpoint="b9ae9348dbc44888829df96b36020fdc" />} />
        
        {/*Error Route*/}
        <Route path='*' element={<NotFound />} />

    </Routes>
  
      
  </div>
  );
}

export default App;
