import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <div className="polygon">
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g><text x="28" y="65" fill="currentColor" fontSize="50px" fontFamily="Consolas, serif">A</text></svg>
        </div>
      </div>
      <div className="nav-optn">
        <ol>
          <li><p>About</p></li>
          <li><p>Experience</p></li>
          <li><p>Projects</p></li>
          <li><p>Contact</p></li>

        </ol>
        <div className='resume'>
          <p> <a href="https://drive.google.com/file/d/1kCPoTutziI721eR7prkXjWQ4HC1mhFqa/view?usp=drive_link" target='_blank'>Resume</a></p>
        </div>
      </div>


    </div>
  )
}

export default Header