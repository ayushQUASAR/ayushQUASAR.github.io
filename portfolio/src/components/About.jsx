import React from 'react'
import './home.css'
import myimg from './mycontent/myimg.jpg'
const About = () => {
  return (
    <div className='aboutme'>
      <h3 >
        About Me</h3>
      <div className='content-my'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Hello! I'm Ayush Ranjan, from Dhanbad, also known as Coal Capital of India.</p>
          <p>I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.</p>
          <p>I am pursuing my Bachelors from <a href="https://www.nitj.ac.in/" target="_blank" rel="nofollow noopener noreferrer">NIT Jalandhar</a> in Computer Science and Engineering (2021-2025) my current GPA is <a href="">7.58</a> out of 10.</p>
          <p>I am a scholar of <a href="https://ffe.org/" target="_blank" rel="nofollow noopener noreferrer">FFE</a> and have also been awarded Merit Scholarship by them for all academic years</p>
          <p>Here are a few of the other activities that I love to do!</p>
          <ul >
            <li >Coding</li><li >Reading</li><li >Problem Solving</li><li >Team Management</li>
            <li >Mentoring</li>
          </ul></div>
        <div className='myimg-wrapper'>

          <div className="myimg">
            <img src={myimg} alt="profilephoto" />
          </div>
          </div>
      </div>
    </div>
  )
}

export default About