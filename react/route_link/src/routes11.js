import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import About1 from './about1'
import About2 from './about2'

function Routes11() {
  return (
      <>    
<Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        <Routes>
            <Route path='home' element={<Home/>}>Home</Route>
            <Route  path='about' element={<About/>}>
                <Route path='about1' element={<About1/>}/>
                <Route path='about2' element={<About2/>}/>
            </Route>
        </Routes>

      </>
      
   
  )
}

export default Routes11

