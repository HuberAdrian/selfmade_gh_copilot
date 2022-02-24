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
import JS_Basics from './JavaScript/JS_Basics';
import JS_Advanced from './JavaScript/JS_Advanced';
import JS_How_JS_works from './JavaScript/JS_How_JS_works';
import JS_Tools from './JavaScript/JS_Tools';
import JS_Basics_Classes from './JavaScript/JS_Basics_Classes';
import JS_Basics_Objects from './JavaScript/JS_Basics_Objects';

function App() {
  
  return (
  <div className="App">
    <Routes>
      <Route path="/" index element={<Home />} />

      {/* Routes for main directions */}
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



        {/*Routes for JavaScript */}
        <Route path="/JavaScript/Basics" element={<JS_Basics />} />
        <Route path="/JavaScript/Advanced" element={<JS_Advanced />} />
        <Route path="/JavaScript/How-JS-works" element={<JS_How_JS_works />} />
        <Route path="/JavaScript/Tools" element={<JS_Tools />} />

        {/*Routes for JavaScript */}
        <Route path="/JavaScript/Basics/Strings" element={<Notion nav={true} endpoint="8483b4d6143b4db2866db65d3b1b0864" />} />
        <Route path="/JavaScript/Basics/Arrays" element={<Notion nav={true} endpoint="75ccb7bce3634f7bb2744faf822b754e" />} />
        <Route path="/JavaScript/Basics/Objects" element={<JS_Basics_Objects/>} />
        <Route path="/JavaScript/Basics/Classes" element={<JS_Basics_Classes />} />

        {/*Routes for JavaScript/Basics/Arrays */}
        <Route path="/JavaScript/Basics/Arrays/" element={<Notion nav={true} endpoint="5fbeabab67644cbcbbbc17e3d7b333c2" />} />
        <Route path="/JavaScript/Basics/Arrays/" element={<Notion nav={true} endpoint="5fbeabab67644cbcbbbc17e3d7b333c2" />} />

        {/*Routes for JavaScript/Basics/Objects */}
        <Route path="/JavaScript/Basics/Objects/reading-dynamic-Properties" element={<Notion nav={true} endpoint="5fbeabab67644cbcbbbc17e3d7b333c2" />} />
        <Route path="/JavaScript/Basics/Objects/Functions" element={<Notion nav={true} endpoint="23870c9b7a2f411ea4352fcc129faf6c" />} />
        <Route path="/JavaScript/Basics/Objects/Destructuring-and-Concatenation" element={<Notion nav={true} endpoint="fe629f27221d4b6484dbfac3c9799d36" />} />
        <Route path="/JavaScript/Basics/Objects/Optional-Chaining" element={<Notion nav={true} endpoint="3e10fb8512f3460b8aa890edbecb4ff0" />} />
        <Route path="/JavaScript/Basics/Objects/Immutability" element={<Notion nav={true} endpoint="51ea40f9a006438298af3b83629865fb" />} />

        {/*Routes for JavaScript/Basics/Classes */}
        <Route path="/JavaScript/Basics/Classes/Basics" element={<Notion nav={true} endpoint="9fc0aeeb0c7f4205a27530709fdcc8cd" />} />
        <Route path="/JavaScript/Basics/Classes/Getters-Setters" element={<Notion nav={true} endpoint="90fb532ed9404f8a952424dc83933b65" />} />
        <Route path="/JavaScript/Basics/Classes/Static-Methods-and-Chaining" element={<Notion nav={true} endpoint="d36f6573548647948305c9c99ec5306a" />} />
        <Route path="/JavaScript/Basics/Classes/Inheritance-and-extend" element={<Notion nav={true} endpoint="f1c41e0943cc49ec90b380ece5396201" />} />
        <Route path="/JavaScript/Basics/Classes/Class-vs-Function" element={<Notion nav={true} endpoint="df76ffd191004787933486556ebf92d5" />} />
        <Route path="/JavaScript/Basics/Classes/Public-Private" element={<Notion nav={true} endpoint="77c59561e9774152968b6935f2b71eeb" />} />        



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
