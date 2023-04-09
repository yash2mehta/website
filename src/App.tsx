import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="header">
        <a href="https://market.watch" target="_blank">
          <img src={logo} className="logo" alt="MarketWatch logo" />
        </a>
        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">About</button>
            <div className="dropdown-content">
              <a href="#">Mission and Vision</a>
              <a href="#">Club Structure</a>
              <a href="#">Management</a>
              <a href="#">Testimonials</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Blog</button>
            {/* <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div> */}
          </div>
          <div className="dropdown">
            <button className="dropbtn">Student Community</button>
            <div className="dropdown-content">
              <a href="#">Research Publications</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Events</button>
            <div className="dropdown-content">
              <a href="#">2022</a>
              <a href="#">2023</a>
              <a href="#">Gallery</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Industry Collaborations</button>
            <div className="dropdown-content">
              <a href="#">Sponsors</a>
              <a href="#">Partnerships</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Contact Us</button>
            {/* <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod quis ligula sit amet tempor. Nullam nibh ipsum, malesuada sed urna sed, feugiat suscipit odio. Nunc ac sem nisi. Aenean at ornare purus, et condimentum orci. Vivamus sodales molestie elit, et rutrum sapien pharetra id. Etiam tincidunt mi gravida suscipit fringilla. Cras vestibulum ipsum in tortor vestibulum vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales lobortis ligula a dapibus. Sed a mauris vel mauris iaculis cursus in convallis magna. Praesent congue orci nisi, vestibulum laoreet nisi maximus nec. Morbi convallis eu risus vel egestas.
        </p>
      </div>
    </div>
  )
}

export default App
