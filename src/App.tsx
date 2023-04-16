import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import ClubStructure from './AboutUs/ClubStructure';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/aboutus/clubstructure' Component={ClubStructure} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
