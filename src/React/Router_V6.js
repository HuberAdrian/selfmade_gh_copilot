import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Router_V6() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/React-Router-Dom/V6/">
            <Direction caption="React-Router-Dom V6" description="navigate within a react-app" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V6/">
            <Direction caption="React-Router-Dom V6" description="navigate within a react-app" />
        </Link>
        
    </div>
  )
}

export default Router_V6