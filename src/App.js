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
import JS_Basics_Arrays from './JavaScript/JS_Basics_Arrays';
import React_Dir from './React/React_Dir';
import JSX_React from './React/JSX_React';
import Components_React from './React/Components_React';
import Fetch_React from './React/Fetch_React';
import Tools_React from './React/Tools_React';
import Hooks_React from './React/Hooks_React';
import Input_React from './React/Input_React';

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
        <Route path="/React" element={<React_Dir />} />
        
        {/* Routes for less used directions*/}
        <Route path="/SEO" element={<Home />} />
        <Route path="/Interview" element={<Home />} />
        <Route path="/Games" element={<Home />} />



        {/*Routes for JavaScript */}
        <Route path="/JavaScript/Basics" element={<JS_Basics />} />
        <Route path="/JavaScript/Advanced" element={<JS_Advanced />} />
        <Route path="/JavaScript/How-JS-works" element={<JS_How_JS_works />} />
        <Route path="/JavaScript/Tools" element={<JS_Tools />} />

        {/*Routes for JavaScript/Basics */}
        <Route path="/JavaScript/Basics/Strings" element={<Notion nav={true} endpoint="8483b4d6143b4db2866db65d3b1b0864" />} />
        <Route path="/JavaScript/Basics/Arrays" element={<JS_Basics_Arrays />} />
        <Route path="/JavaScript/Basics/Objects" element={<JS_Basics_Objects/>} />
        <Route path="/JavaScript/Basics/Classes" element={<JS_Basics_Classes />} />
        <Route path="/JavaScript/Basics/Functions" element={<Notion nav={true} endpoint="1bbc4deabc384953a2abdba270b5a5ad" />} />

        {/*Routes for JavaScript/Basics/Arrays */}
        <Route path="/JavaScript/Basics/Arrays/Functions" element={<Notion nav={true} endpoint="a500e04135c54d92a90977454b36b42a" />} />
        <Route path="/JavaScript/Basics/Arrays/Destructuring-and-Concatenation" element={<Notion nav={true} endpoint="fd7ea339240c456e957f340c4c7d9e07" />} />

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

        {/*Routes for JavaScript/Advanced */}
        <Route path="/JavaScript/Advanced/Nullish-Coalescing" element={<Notion nav={true} endpoint="87203a8f6bb644078aca06572e7dca73" />} />
        <Route path="/JavaScript/Advanced/Try-Catch" element={<Notion nav={true} endpoint="b94692f7b9ce4d238dec05adc55fc924" />} />
        <Route path="/JavaScript/Advanced/Asynchronous-Callbacks" element={<Notion nav={true} endpoint="454159db20454931a96d1452e6ad108d" />} />
        <Route path="/JavaScript/Advanced/Fetch-and-JSON" element={<Notion nav={true} endpoint="628ffebbf1424c00a0a363668eeab2cc" />} />
        <Route path="/JavaScript/Advanced/ES-Modules" element={<Notion nav={true} endpoint="ba01fee97e034849a06093e9224dc6c7" />} />
        <Route path="/JavaScript/Advanced/forLoop" element={<Notion nav={true} endpoint="84b1abf56bb743d486f514c421bcd7f3" />} />
        <Route path="/JavaScript/Advanced/IFFEE" element={<Notion nav={true} endpoint="0d2a1dc674b2495fb6a96725d2eb0115" />} />

        {/*Routes for JavaScript/Tools */}
        <Route path="/JavaScript/Tools/Module-Bundlers" element={<Notion nav={true} endpoint="8f2f66d208644a30b7b364dd7714bed8" />} />
        <Route path="/JavaScript/Tools/EcmaScript" element={<Notion nav={true} endpoint="72d10fc228994a8d8c620f0dd92bb1a1" />} />
        <Route path="/JavaScript/Tools/Package-Managers" element={<Notion nav={true} endpoint="439db866820549229263db3b682a6d71" />} />
        <Route path="/JavaScript/Tools/ESLint" element={<Notion nav={true} endpoint="4c80d90a04fb4f5c904e06dc592421f1" />} />

        {/*Routes for JavaScript/How-JS-works */}
        <Route path="/JavaScript/How-JS-works/Closure" element={<Notion nav={true} endpoint="523d22d2397b4575a81e4634c23d86f7" />} />
        <Route path="/JavaScript/How-JS-works/Event-Loop" element={<Notion nav={true} endpoint="b2a9388cf8944adbaebce559d3ee7e07" />} />
        <Route path="/JavaScript/How-JS-works/ASI" element={<Notion nav={true} endpoint="3b05d62a33ba4834be92c0de60066e17" />} />

      

        {/*Routes for /React */}
        <Route path="/React/Introduction-and-Install" element={<Notion nav={true} endpoint="953ea79f4b2d49a897d49777cbd4808f" />} />
        <Route path="/React/JSX" element={<JSX_React />} />
        <Route path="/React/Components" element={<Components_React />} />
        <Route path="/React/Hooks" element={<Hooks_React />} />
        <Route path="/React/User-Input" element={<Input_React />} />
        <Route path="/React/Fetch" element={<Fetch_React />} />
        <Route path="/React/refs" element={<Notion nav={true} endpoint="cd7f2f70af1d429ba80c0585b6c91ee1" />} />
        <Route path="/React/Tools-Libraries" element={<Tools_React />} />
        <Route path="/React/Local-Storage" element={<Notion nav={true} endpoint="d17d6a518ee847ca889e7adcaf00e96c" />} />
        <Route path="/React/Lazy" element={<Notion nav={true} endpoint="61fd367d5c5b410aab0f4aee68abeb25" />} />
        <Route path="/React/Class-Components" element={<Notion nav={true} endpoint="3d0b3ad9b16f42c9b2427d266ebdfd92" />} />
        <Route path="/React/Styles" element={<Notion nav={true} endpoint="5c031ee18e494443ae1d83c7b314f286" />} />
        <Route path="/React/Synthetic-Events" element={<Notion nav={true} endpoint="e187ccb3d5e9418c93f17037a8761121" />} />
        
        {/*Routes for /React/JSX */}
        <Route path="/React/JSX/Overall" element={<Notion nav={true} endpoint="464880e62ede413282843d71d0b51001" />} />
        <Route path="/React/JSX/Expressions" element={<Notion nav={true} endpoint="03d0e4fcfec34f34a57fb05883038e83" />} />
        <Route path="/React/JSX/Children" element={<Notion nav={true} endpoint="3367354c57d8408f84872407f950b5f3" />} />
        <Route path="/React/JSX/Fragments" element={<Notion nav={true} endpoint="1b95ff5f8fa94a7ea7bf48bca4731c2a" />} />
        <Route path="/React/JSX/Gotchas" element={<Notion nav={true} endpoint="32d46270b1a04e55be222878e0265570" />} />
        <Route path="/React/JSX/Notation" element={<Notion nav={true} endpoint="cd3074a1536c4f3588325686b129da08" />} />
        <Route path="/React/JSX/inner-HTML" element={<Notion nav={true} endpoint="3578d22c07df41bc8758281123b414f0" />} />
        <Route path="/React/JSX/Arrays" element={<Notion nav={true} endpoint="263b8e652e5143dd930eea4601f2b412" />} />
       
        {/*Routes for /React/Components/ */}
        <Route path="/React/Components/Overall" element={<Notion nav={true} endpoint="fa3a2572fb4c44f8aed4e52c7cfbb6ac" />} />
        <Route path="/React/Components/Props" element={<Notion nav={true} endpoint="3f6bc0e1bf8d48fa8c496ee5ba0d7800" />} />
        <Route path="/React/Components/Conditional-Rendering" element={<Notion nav={true} endpoint="52f45746756f4916b6e3d68bb677b618" />} />





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
