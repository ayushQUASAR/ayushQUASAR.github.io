import React from 'react'

import './home.css'
import Header from './Header/Header'
import MyContent from './mycontent/MyContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'



import About from './About'
import Work from './work/Work'
import Project from './project/Project'
const Home = () => {
  return (
    <div className='home-wrapper'>
      <Header />

      <aside className='left asidetag'>
        <ul>
          <li> <FontAwesomeIcon icon={faLinkedin} /></li>

          <li><FontAwesomeIcon icon={faInstagram} /> </li>
          <li><FontAwesomeIcon icon={faGithub} /></li>

        </ul>
      </aside>
      <aside className='right asidetag'>
        <div className='mymail'>
          <a href="mailto:ayushranjan656@gmail.com" class="email__StyledEmailLink-sc-148iwo6-1 egGZFO">ayushranjan656@gmail.com</a></div>
      </aside>
      <section className='mysection'><MyContent /></section>
      <section className='mysection'><About /></section>
      <section className='mysection'><Work /></section>
      <Project />


    </div>
  )
}

export default Home