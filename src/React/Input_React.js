import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Input_React() {
  return (
    <div>
      <Navbar />
        <Link to="/React/User-Input/Forms">
            <Direction caption="Forms Example" description="" />
        </Link>
        <Link to="/React/User-Input/Accessible">
            <Direction caption="Accessible Forms" description="web apps also designed for people w/ disabilities" />
        </Link>
    </div>
  )
}

export default Input_React