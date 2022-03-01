import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Fetch_React() {
  return (
    <div>
      <Navbar />
        <Link to="/React/Fetch/Intro">
            <Direction caption="Intro" description="Intro + Step-by-Step approach + Rules" />
        </Link>
        <Link to="/React/Fetch/Errors">
            <Direction caption="Handling Fetch Errors" description="HTTP, Network Errors, Cannot read property..." />
        </Link>
        <Link to="/React/Fetch/Loading">
            <Direction caption="Handling Loading State" description="show loader, disable button" />
        </Link>
        <Link to="/React/Fetch/Events">
            <Direction caption="Fetch & Events" description="Fetch when button is clicked, value selected" />
        </Link>
        <Link to="/React/Fetch/Async">
            <Direction caption="Using Async/Await" description="Optional, syntatic sugar" />
        </Link>
        <Link to="/React/Fetch/Post-Put">
            <Direction caption="Fetch Post, Put" description="" />
        </Link>
        <Link to="/React/Hooks/Custom/useFetch">
            <Direction caption="Custom useFetch Hook" description="" />
        </Link>
    </div>
  )
}

export default Fetch_React