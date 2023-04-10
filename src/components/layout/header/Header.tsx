import logo from '../../../assets/logo.svg'
import './Header.css'

function Header() {
  return (
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
  )
}

export default Header