import './App.css';
import Home from './components/Home.js';
import {Routes, Route} from "react-router-dom";

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
