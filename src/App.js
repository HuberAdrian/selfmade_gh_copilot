import './App.css';
import Home from './components/Home.js';
import {Routes, Route} from "react-router-dom";
import Git_Github from './Git_Github/Git_Github';

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

  </div>
  );
}

export default App;
