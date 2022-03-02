import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function Tools_Stripe() {
  return (
    <div>
        <Navbar />
        <Link to="/React/Tools-Libraries/Stripe-Checkout/Notes">
        <Direction caption="Stripe Checkout Integration" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Stripe-Checkout/Create">
        <Direction caption="Stripe Checkout Integration" description="" />
        </Link>
        <Link to="/React/Tools-Libraries/Stripe-Checkout/Integrate">
        <Direction caption="Stripe Checkout Integration" description="" />
        </Link>
    </div>
  )
}

export default Tools_Stripe