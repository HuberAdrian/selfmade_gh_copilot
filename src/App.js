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
  
      
  </div>
  );
}

export default App;
