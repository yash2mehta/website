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
            <a target="_blank" href="https://www.instagram.com/sutd.marketwatch/">
              <FaInstagram/>
            </a>
            {/* <a href="#">
              <FaFacebook/>
            </a> */}
            <a target="_blank" href="https://sg.linkedin.com/company/sutd-marketwatch">
              <FaLinkedin/>
            </a>
            <a target="_blank" href="mailto:marketwatch@club.sutd.edu.sg">
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