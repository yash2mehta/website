import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  
    return (
      <div className="footer">
        <div className="centered-container">
          <div className="icon-container">
            <a href="#">
              <FaInstagram/>
            </a>
            <a href="#">
              <FaFacebook/>
            </a>
            <a href="#">
              <FaLinkedin/>
            </a>
            <a href="#">
              <FiMail/>
            </a>
          </div>  
          <div className="copyright">
            © COPYRIGHT - SUTD MARKETWATCH CLUB 2023
          </div>
        </div>        
      </div>
    )
  }
  
  export default Footer