import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/VS-Extensions">
        <Direction caption="VS Extensions" description="create Component template, ..." />
        </Link>
        <Link to="/React/Tools-Libraries/React-Router-Dom">
        <Direction caption="React-Router-Dom" description="navigate within a react-app" />
        </Link>
        <Link to="/React/Tools-Libraries/Stripe-Checkout">
        <Direction caption="Stripe Checkout Integration" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Preact">
        <Direction caption="Preact" description="Lightweight alternative to React" />
        </Link>
        <Link to="/React/Tools-Libraries/Redux">
        <Direction caption="Redux" description="Library to predictably update your app state" />
        </Link>
        <Link to="/React/Tools-Libraries/Netifly">
        <Direction caption="Deploying to Netfly" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Dev-Tools">
        <Direction caption="React Dev Tools" description="Easier to debug React Apps" />
        </Link>
        <Link to="/React/Tools-Libraries/UI-Kits">
        <Direction caption="UI Kits" description="" />
        </Link>
    </div>
  )
}

export default Tools_React