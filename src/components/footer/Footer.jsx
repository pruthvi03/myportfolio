import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Pruthvi Hingu</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/pruthvi.hingu/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/pruthvi.hingu/"><GrInstagram/></a>
        <a href="https://twitter.com/PruthviHingu"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Pruthvi Hingu. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer