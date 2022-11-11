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
import UseState_React from './React/UseState_React';
import UseEffect_React from './React/UseEffect_React';
import CHooks_React from './React/CHooks_React';
import Tools_React_Router from './React/Tools_React_Router';
import Tools_Stripe from './React/Tools_Stripe';
import Tools_Preact from './React/Tools_Preact';
import Tools_Redux from './React/Tools_Redux';
import Router_V4 from './React/Router_V4';
import Router_V6 from './React/Router_V6';

function App() {
  
  return (
  <div className="App">
    <Routes>
      <Route path="/Copilot/" index element={<Home />} />
      <Route path="/" index element={<Home />} />

      {/* Routes for main directions */}
        <Route path="/Copilot/Plan-Start" element={<Plan_Start />} />
        <Route path="/Copilot/HTML-CSS" element={<Html_css />} />
        <Route path="/Copilot/JavaScript" element={<JavaScript_Dir />} />
        <Route path="/Copilot/Media" element={<Notion nav={true} endpoint="110e0248e56b419395615c0f66fafab4" />} />
        <Route path="/Copilot/Git-Github" element={<Git_Github />} />
        <Route path="/Copilot/React" element={<React_Dir />} />



        {/* Routes for less used directions*/}
        <Route path="/Copilot/SEO" element={<Notion nav={true} endpoint="43f7d54a678543dfa6251db3121b281e" />} />
        <Route path="/Copilot/Interview" element={<Notion nav={true} endpoint="d5aa216897624dbca4dc54f4d84e0ee7" />} />

        

        
        {/*Routes for Plan-Start*/}
        <Route path="/Copilot/Plan-Start/Checklist" element={<Notion nav={true} endpoint="55ccc198f6a54b0e995c2475ca413ce7" />} />
        <Route path="/Copilot/Plan-Start/CRA" element={<Notion nav={true} endpoint="3e10fb8512f3460b8aa890edbecb4ff0" />} />
        <Route path="/Copilot/Plan-Start/Ideas" element={<Notion nav={true} endpoint="6945a651ef09419e94dc09794a6a7646" />} />



        {/*Routes for HTML-CSS*/}
        <Route path="/Copilot/HTML-CSS/Generators" element={<Notion nav={true} endpoint="0c2ea424efcb4e53997c5d6606d0fa4a" />} />
        <Route path="/Copilot/HTML-CSS/Generators/best-practices" element={<Notion nav={true} endpoint="0c2ea424efcb4e53997c5d6606d0fa4a" />} />





        {/*Routes for JavaScript */}
        <Route path="/Copilot/JavaScript/Basics" element={<JS_Basics />} />
        <Route path="/Copilot/JavaScript/Advanced" element={<JS_Advanced />} />
        <Route path="/Copilot/JavaScript/How-JS-works" element={<JS_How_JS_works />} />
        <Route path="/Copilot/JavaScript/Tools" element={<JS_Tools />} />
        {/*Routes for JavaScript/Basics */}
        <Route path="/Copilot/JavaScript/Basics/Strings" element={<Notion nav={true} endpoint="8483b4d6143b4db2866db65d3b1b0864" />} />
        <Route path="/Copilot/JavaScript/Basics/Arrays" element={<JS_Basics_Arrays />} />
        <Route path="/Copilot/JavaScript/Basics/Objects" element={<JS_Basics_Objects/>} />
        <Route path="/Copilot/JavaScript/Basics/Classes" element={<JS_Basics_Classes />} />
        <Route path="/Copilot/JavaScript/Basics/Functions" element={<Notion nav={true} endpoint="1bbc4deabc384953a2abdba270b5a5ad" />} />
        {/*Routes for JavaScript/Basics/Arrays */}
        <Route path="/Copilot/JavaScript/Basics/Arrays/Functions" element={<Notion nav={true} endpoint="a500e04135c54d92a90977454b36b42a" />} />
        <Route path="/Copilot/JavaScript/Basics/Arrays/Destructuring-and-Concatenation" element={<Notion nav={true} endpoint="fd7ea339240c456e957f340c4c7d9e07" />} />
        {/*Routes for JavaScript/Basics/Objects */}
        <Route path="/Copilot/JavaScript/Basics/Objects/reading-dynamic-Properties" element={<Notion nav={true} endpoint="5fbeabab67644cbcbbbc17e3d7b333c2" />} />
        <Route path="/Copilot/JavaScript/Basics/Objects/Functions" element={<Notion nav={true} endpoint="23870c9b7a2f411ea4352fcc129faf6c" />} />
        <Route path="/Copilot/JavaScript/Basics/Objects/Destructuring-and-Concatenation" element={<Notion nav={true} endpoint="fe629f27221d4b6484dbfac3c9799d36" />} />
        <Route path="/Copilot/JavaScript/Basics/Objects/Optional-Chaining" element={<Notion nav={true} endpoint="3e10fb8512f3460b8aa890edbecb4ff0" />} />
        <Route path="/Copilot/JavaScript/Basics/Objects/Immutability" element={<Notion nav={true} endpoint="51ea40f9a006438298af3b83629865fb" />} />
        {/*Routes for JavaScript/Basics/Classes */}
        <Route path="/Copilot/JavaScript/Basics/Classes/Basics" element={<Notion nav={true} endpoint="9fc0aeeb0c7f4205a27530709fdcc8cd" />} />
        <Route path="/Copilot/JavaScript/Basics/Classes/Getters-Setters" element={<Notion nav={true} endpoint="90fb532ed9404f8a952424dc83933b65" />} />
        <Route path="/Copilot/JavaScript/Basics/Classes/Static-Methods-and-Chaining" element={<Notion nav={true} endpoint="d36f6573548647948305c9c99ec5306a" />} />
        <Route path="/Copilot/JavaScript/Basics/Classes/Inheritance-and-extend" element={<Notion nav={true} endpoint="f1c41e0943cc49ec90b380ece5396201" />} />
        <Route path="/Copilot/JavaScript/Basics/Classes/Class-vs-Function" element={<Notion nav={true} endpoint="df76ffd191004787933486556ebf92d5" />} />
        <Route path="/Copilot/JavaScript/Basics/Classes/Public-Private" element={<Notion nav={true} endpoint="77c59561e9774152968b6935f2b71eeb" />} />        
        {/*Routes for JavaScript/Advanced */}
        <Route path="/Copilot/JavaScript/Advanced/Nullish-Coalescing" element={<Notion nav={true} endpoint="87203a8f6bb644078aca06572e7dca73" />} />
        <Route path="/Copilot/JavaScript/Advanced/Try-Catch" element={<Notion nav={true} endpoint="b94692f7b9ce4d238dec05adc55fc924" />} />
        <Route path="/Copilot/JavaScript/Advanced/Asynchronous-Callbacks" element={<Notion nav={true} endpoint="454159db20454931a96d1452e6ad108d" />} />
        <Route path="/Copilot/JavaScript/Advanced/Fetch-and-JSON" element={<Notion nav={true} endpoint="628ffebbf1424c00a0a363668eeab2cc" />} />
        <Route path="/Copilot/JavaScript/Advanced/ES-Modules" element={<Notion nav={true} endpoint="ba01fee97e034849a06093e9224dc6c7" />} />
        <Route path="/Copilot/JavaScript/Advanced/forLoop" element={<Notion nav={true} endpoint="84b1abf56bb743d486f514c421bcd7f3" />} />
        <Route path="/Copilot/JavaScript/Advanced/IFFEE" element={<Notion nav={true} endpoint="0d2a1dc674b2495fb6a96725d2eb0115" />} />
        {/*Routes for JavaScript/Tools */}
        <Route path="/Copilot/JavaScript/Tools/Module-Bundlers" element={<Notion nav={true} endpoint="8f2f66d208644a30b7b364dd7714bed8" />} />
        <Route path="/Copilot/JavaScript/Tools/EcmaScript" element={<Notion nav={true} endpoint="72d10fc228994a8d8c620f0dd92bb1a1" />} />
        <Route path="/Copilot/JavaScript/Tools/Package-Managers" element={<Notion nav={true} endpoint="439db866820549229263db3b682a6d71" />} />
        <Route path="/Copilot/JavaScript/Tools/ESLint" element={<Notion nav={true} endpoint="4c80d90a04fb4f5c904e06dc592421f1" />} />
        <Route path="/Copilot/JavaScript/Tools/APIs" element={<Notion nav={true} endpoint="98ee49f3108c47729c6e90c0677d924b" />} />
        {/*Routes for JavaScript/How-JS-works */}
        <Route path="/Copilot/JavaScript/How-JS-works/Closure" element={<Notion nav={true} endpoint="523d22d2397b4575a81e4634c23d86f7" />} />
        <Route path="/Copilot/JavaScript/How-JS-works/Event-Loop" element={<Notion nav={true} endpoint="b2a9388cf8944adbaebce559d3ee7e07" />} />
        <Route path="/Copilot/JavaScript/How-JS-works/ASI" element={<Notion nav={true} endpoint="3b05d62a33ba4834be92c0de60066e17" />} />

      

        {/*Routes for /React */}
        <Route path="/Copilot/React/Introduction-and-Install" element={<Notion nav={true} endpoint="953ea79f4b2d49a897d49777cbd4808f" />} />
        <Route path="/Copilot/React/JSX" element={<JSX_React />} />
        <Route path="/Copilot/React/Components" element={<Components_React />} />
        <Route path="/Copilot/React/Hooks" element={<Hooks_React />} />
        <Route path="/Copilot/React/User-Input" element={<Input_React />} />
        <Route path="/Copilot/React/Fetch" element={<Fetch_React />} />
        <Route path="/Copilot/React/refs" element={<Notion nav={true} endpoint="cd7f2f70af1d429ba80c0585b6c91ee1" />} />
        <Route path="/Copilot/React/Context" element={<Notion nav={true} endpoint="05400301a558474091a6db891671abea" />} />
        <Route path="/Copilot/React/Tools-Libraries" element={<Tools_React />} />
        <Route path="/Copilot/React/Local-Storage" element={<Notion nav={true} endpoint="d17d6a518ee847ca889e7adcaf00e96c" />} />
        <Route path="/Copilot/React/Lazy" element={<Notion nav={true} endpoint="61fd367d5c5b410aab0f4aee68abeb25" />} />
        <Route path="/Copilot/React/Class-Components" element={<Notion nav={true} endpoint="3d0b3ad9b16f42c9b2427d266ebdfd92" />} />
        <Route path="/Copilot/React/Styles" element={<Notion nav={true} endpoint="5c031ee18e494443ae1d83c7b314f286" />} />
        <Route path="/Copilot/React/Synthetic-Events" element={<Notion nav={true} endpoint="e187ccb3d5e9418c93f17037a8761121" />} />
        {/*Routes for /React/JSX */}
        <Route path="/Copilot/React/JSX/Overall" element={<Notion nav={true} endpoint="464880e62ede413282843d71d0b51001" />} />
        <Route path="/Copilot/React/JSX/Expressions" element={<Notion nav={true} endpoint="03d0e4fcfec34f34a57fb05883038e83" />} />
        <Route path="/Copilot/React/JSX/Children" element={<Notion nav={true} endpoint="3367354c57d8408f84872407f950b5f3" />} />
        <Route path="/Copilot/React/JSX/Fragments" element={<Notion nav={true} endpoint="1b95ff5f8fa94a7ea7bf48bca4731c2a" />} />
        <Route path="/Copilot/React/JSX/Gotchas" element={<Notion nav={true} endpoint="32d46270b1a04e55be222878e0265570" />} />
        <Route path="/Copilot/React/JSX/Notation" element={<Notion nav={true} endpoint="cd3074a1536c4f3588325686b129da08" />} />
        <Route path="/Copilot/React/JSX/inner-HTML" element={<Notion nav={true} endpoint="3578d22c07df41bc8758281123b414f0" />} />
        <Route path="/Copilot/React/JSX/Arrays" element={<Notion nav={true} endpoint="263b8e652e5143dd930eea4601f2b412" />} />
        {/*Routes for /React/Components/ */}
        <Route path="/Copilot/React/Components/Overall" element={<Notion nav={true} endpoint="fa3a2572fb4c44f8aed4e52c7cfbb6ac" />} />
        <Route path="/Copilot/React/Components/Props" element={<Notion nav={true} endpoint="3f6bc0e1bf8d48fa8c496ee5ba0d7800" />} />
        <Route path="/Copilot/React/Components/Conditional-Rendering" element={<Notion nav={true} endpoint="52f45746756f4916b6e3d68bb677b618" />} />
        {/*Routes for /React/Hooks */}
        <Route path="/Copilot/React/Hooks/useState" element={<UseState_React />} />
        <Route path="/Copilot/React/Hooks/useEffect" element={<UseEffect_React />} />
        <Route path="/Copilot/React/Hooks/useLayoutEffect" element={<Notion nav={true} endpoint="123f3ea11d3947cfa3baaee5bea442b0" />} />
        <Route path="/Copilot/React/Hooks/Custom" element={<CHooks_React />} />
        <Route path="/Copilot/React/Hooks/State-Effect" element={<Notion nav={true} endpoint="3cfebc0961fb45b0a77da64cf210abf8" />} />
        <Route path="/Copilot/React/Hooks/useState/Intro" element={<Notion nav={true} endpoint="dc941bbcf39b49fab2c1e2e5b1d98d99" />} />
        <Route path="/Copilot/React/Hooks/useState/Change-State" element={<Notion nav={true} endpoint="381b46fc21d7453b8c22d6b8baf96960" />} />
        <Route path="/Copilot/React/Hooks/useState/Arrays" element={<Notion nav={true} endpoint="b125453f33414a879b28a847f40e4938" />} />
        <Route path="/Copilot/React/Hooks/useState/Functional" element={<Notion nav={true} endpoint="3db5644ae88841fc85697e6505fabcf1" />} />
        <Route path="/Copilot/React/Hooks/useEffect/Intro" element={<Notion nav={true} endpoint="27a36f70b9dd4c39891af439d2809eec" />} />
        <Route path="/Copilot/React/Hooks/useEffect/CleanUp" element={<Notion nav={true} endpoint="7f667a60489249e597a46ec427adde5b" />} />
        <Route path="/Copilot/React/Hooks/useEffect/Dependencies" element={<Notion nav={true} endpoint="6b04b0227dc24497977cccb568f627f1" />} />
        <Route path="/Copilot/React/Hooks/Custom/Intro" element={<Notion nav={true} endpoint="9e14f202d3004b389d09d309099b5748" />} />
        <Route path="/Copilot/React/Hooks/Custom/Parameters" element={<Notion nav={true} endpoint="dee247d6cb654ec6a1b7a9956fec5d1c" />} />
        <Route path="/Copilot/React/Hooks/Custom/State" element={<Notion nav={true} endpoint="9eb348709cf846eebc4a5d9b3ff8895e" />} />
        <Route path="/Copilot/React/Hooks/Custom/useFetch" element={<Notion nav={true} endpoint="55d669a630314b87b2551745006d7a82" />} />
        {/*Routes for /React/User-Input */}
        <Route path="/Copilot/React/User-Input/Forms" element={<Notion nav={true} endpoint="011bd3e4d8dc4a738e188ca866842c8c" />} />
        <Route path="/Copilot/React/User-Input/Accessible" element={<Notion nav={true} endpoint="1848ceab384a4e39abd14ada6e7bc380" />} />
        {/*Routes for /React/Fetch */}
        <Route path="/Copilot/React/Fetch/Intro" element={<Notion nav={true} endpoint="8253c9835bd644d293c3c2df614a73d2" />} />
        <Route path="/Copilot/React/Fetch/Errors" element={<Notion nav={true} endpoint="a3431ed53dc94698bb1bf34e8ba8d9cf" />} />
        <Route path="/Copilot/React/Fetch/Loading" element={<Notion nav={true} endpoint="066b01f70e864f539799a6410ac3f0a0" />} />
        <Route path="/Copilot/React/Fetch/Events" element={<Notion nav={true} endpoint="3cf885fd2eb34c309911cb0b0cc594d6" />} />
        <Route path="/Copilot/React/Fetch/Async" element={<Notion nav={true} endpoint="5b032ad4d5cf46fbb3ba7d6fff7d4d60" />} />
        <Route path="/Copilot/React/Fetch/Post-Put" element={<Notion nav={true} endpoint="25c5def3c2f14b2192598aa1b3eb1388" />} />
        {/*Routes for /React/Tools-Libraries */}
        <Route path="/Copilot/React/Tools-Libraries/VS-Extensions" element={<Notion nav={true} endpoint="ccbbf7f9b1864fb88ef54dfc8fec8039" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom" element={<Tools_React_Router />} />
        <Route path="/Copilot/React/Tools-Libraries/Stripe-Checkout" element={<Tools_Stripe />} />
        <Route path="/Copilot/React/Tools-Libraries/Preact" element={<Tools_Preact />} />
        <Route path="/Copilot/React/Tools-Libraries/Redux" element={<Tools_Redux />} />
        <Route path="/Copilot/React/Tools-Libraries/Netifly" element={<Notion nav={true} endpoint="9af6a6ca5e98493da2a1d757daa09cfa" />} />
        <Route path="/Copilot/React/Tools-Libraries/Dev-Tools" element={<Notion nav={true} endpoint="527c2aa90484479eba647d5b1f6bd555" />} />
        <Route path="/Copilot/React/Tools-Libraries/UI-Kits" element={<Notion nav={true} endpoint="6713a4bb8ac847e7bd5e6626cac1bdab" />} />
        <Route path="/Copilot/React/Tools-Libraries/Preact/Overview" element={<Notion nav={true} endpoint="2826ff8097294bf697a9c43498730b74" />} />
        <Route path="/Copilot/React/Tools-Libraries/Preact/App-from-Scratch" element={<Notion nav={true} endpoint="1815d7c5479e40ab987506194f3d3bb9" />} />
        <Route path="/Copilot/React/Tools-Libraries/Preact/Move-to" element={<Notion nav={true} endpoint="b65786b360a94907b3f20a0a5dfb285b" />} />
        <Route path="/Copilot/React/Tools-Libraries/Stripe-Checkout/Notes" element={<Notion nav={true} endpoint="c1f5d28c2d7f4e5d9b38cfe7ddf5454f" />} />
        <Route path="/Copilot/React/Tools-Libraries/Stripe-Checkout/Create" element={<Notion nav={true} endpoint="72c67dd4f43c4e37af007635ad20de82" />} />
        <Route path="/Copilot/React/Tools-Libraries/Stripe-Checkout/Integrate" element={<Notion nav={true} endpoint="928a717e978540ee9296cb7672c510b2" />} />
        <Route path="/Copilot/React/Tools-Libraries/Redux/Intro" element={<Notion nav={true} endpoint="2943b83aec20440a918ba51141e40ad7" />} />
        <Route path="/Copilot/React/Tools-Libraries/Redux/Setup" element={<Notion nav={true} endpoint="0fdaed3baf824d5a9bd6e6f6042e496a" />} />
        <Route path="/Copilot/React/Tools-Libraries/Redux/Toolkit" element={<Notion nav={true} endpoint="6b394167cf6048dba2fd7c153d29c25a" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4" element={<Router_V4 />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V6" element={<Router_V6 />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4/Intro" element={<Notion nav={true} endpoint="b0769dcb756a430fa4345f266af3daaa" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4/Navigation" element={<Notion nav={true} endpoint="54dfebe84db649898b82e02af5faa3cc" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4/Parameters" element={<Notion nav={true} endpoint="7fea6b0a893d498f9551a96907f24683" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4/Nested" element={<Notion nav={true} endpoint="58c87a5ad9054aa5bc974687ecbb5b9f" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V4/Advanced" element={<Notion nav={true} endpoint="184ce3fccf994f6196f808ea1b47bd6d" />} />
        <Route path="/Copilot/React/Tools-Libraries/React-Router-Dom/V6/Redirect" element={<Notion nav={true} endpoint="89418faa43054415a89631675b2d147e" />} />
        


        
        {/*Routes for Git_GitHub*/}
        <Route path="/Copilot/Git-Github/How-Git-Works" element={<Notion nav={true} endpoint="001e5bd586fb4a71a8303498527171be" />} />
        <Route path="/Copilot/Git-Github/Configuration-and-Setup" element={<Notion nav={true} endpoint="8c76bbd5bb8f4662bbe038d93fa39802" />} />
        <Route path="/Copilot/Git-Github/GitIgnore" element={<Notion nav={true} endpoint="6f8390f7535e4669bb7af8cad05aeaa3" />} />
        <Route path="/Copilot/Git-Github/Tags" element={<Notion nav={true} endpoint="3c21faf6cf1e4a4a95b5be84c1f07423" />} />
        <Route path="/Copilot/Git-Github/Branches" element={<Notion nav={true} endpoint="7a3939d2a42c45a3a4ad18c29cec2f33" />} />
        <Route path="/Copilot/Git-Github/Collaborating" element={<Git_Collaborating />} />  
        <Route path="/Copilot/Git-Github/Collaborating/Synching" element={<Notion nav={true} endpoint="b6674d34c9554ee4bb196480fdbe5156" />} />
        <Route path="/Copilot/Git-Github/Collaborating/Workflows" element={<Notion nav={true} endpoint="b9ae9348dbc44888829df96b36020fdc" />} />
        


        {/*Error Route*/}
        <Route path='*' element={<NotFound />} />

    </Routes>
  
      
  </div>
  );
}

export default App;
