import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Link to="about1">About1</Link>
                <Link to="about2">About2</Link>
                <Outlet/>
    </div>
  )
}

export default About