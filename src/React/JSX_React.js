import React from 'react'
import { Link } from 'react-router-dom';
import Direction from '../components/Direction';
import Navbar from '../components/Navbar';

function JSX_React() {
  return (
    <div>
        <Navbar />
        <Link to="/React/JSX/Overall">
            <Direction caption="What JSX is" description="Overall, selfclosing tags" />
        </Link>
        <Link to="/React/JSX/Expressions">
            <Direction caption="JSX Expressions" description="add dynamic values in Components, multiple classes" />
        </Link>
        <Link to="/React/JSX/Children">
            <Direction caption="JSX Children" description="" />
        </Link>
        <Link to="/React/JSX/Fragments">
            <Direction caption="JSX Fragments" description="return multiple JSX Elements at once" />
        </Link>
        <Link to="/React/JSX/Gotchas">
            <Direction caption="JSX Gotchas" description="Comments, Spread attributes, return nothing" />
        </Link>
        <Link to="/React/JSX/Notation">
            <Direction caption="Dot Notation" description="used in Context provider and libraries" />
        </Link>
        <Link to="/React/JSX/inner-HTML">
            <Direction caption="Dangerously set inner HTML" description="" />
        </Link>
        <Link to="/React/JSX/Arrays">
            <Direction caption="Arrays in JSX" description="e.g. create Lists" />
        </Link>

    </div>
  )
}

export default JSX_React