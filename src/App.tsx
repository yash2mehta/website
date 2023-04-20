import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer/Footer';

import Navbar2 from './Navbar/Navbar2'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ClubStructure from './AboutUs/ClubStructure';
import ClubAdvisors from './AboutUs/ClubAdvisors';
import Testimonials from './AboutUs/Testimonials';
import ManagementCommittee from './AboutUs/ManagementCommittee';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Navbar2/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/aboutus/clubstructure' Component={ClubStructure} />
          <Route path='/aboutus/clubadvisors' Component={ClubAdvisors} />
          <Route path='/aboutus/testimonials' Component={Testimonials} />
          <Route path='/aboutus/managementcommittee' Component={ManagementCommittee} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
