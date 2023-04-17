import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import Navbar2 from './Navbar/Navbar2'

import { BrowserRouter,Routes, Route } from 'react-router-dom'

import ClubStructure from './AboutUs/ClubStructure';
import ClubAdvisors from './AboutUs/ClubAdvisors';
import Testimonials from './AboutUs/Testimonials';
import ManagementCommittee from './AboutUs/ManagementCommittee';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
        {/* <Navbar/> */}
        <Navbar2/>
        <Routes>
          <Route path='/aboutus/clubstructure' Component={ClubStructure} />
          <Route path='/aboutus/clubadvisors' Component={ClubAdvisors} />
          <Route path='/aboutus/testimonials' Component={Testimonials} />
          <Route path='/aboutus/managementcommittee' Component={ManagementCommittee} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
