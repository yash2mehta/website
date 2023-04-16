import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import ClubStructure from './AboutUs/ClubStructure';
import ClubAdvisors from './AboutUs/ClubAdvisors';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/aboutus/clubstructure' Component={ClubStructure} />
          <Route path='/aboutus/clubadvisors' Component={ClubAdvisors} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
