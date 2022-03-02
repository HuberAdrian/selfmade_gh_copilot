import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Router_V4() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4/Intro">
            <Direction caption="Intro" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4/Navigation">
            <Direction caption="Simple Navigation" description="between 2 Pages" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4/Parameters">
            <Direction caption="URL Parameters" description="dynamic URLs, Page will receive a Parameter" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4/Nested">
            <Direction caption="Nested Routes" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom/V4/Advanced">
            <Direction caption="Advanced" description="dead URLs, highlight active Page, redirect based on condition" />
        </Link>
    </div>
  )
}

export default Router_V4