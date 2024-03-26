import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer margin'>
          <div>
            <h3>Privacy</h3>
            <ul>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul className="social-icons">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a></li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <p>CopyRight &copy; 2024. No rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
