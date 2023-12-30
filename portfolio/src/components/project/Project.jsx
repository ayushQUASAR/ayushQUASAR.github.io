import React from 'react'
import './project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import m from '../img/manage.png'
import conf from '../img/conf.png'
import safar from '../img/safar.png'
import nitj from '../img/nitj.png'
const Project = () => {
    return (
        <section className='mysection'>
            <div className='project'>  <h3>Projects</h3>

                <div className='proj-div'>
                    <div className="leftimg-proj">
                        <div className='img-wrapper'> <img src={m} alt="" /></div>
                    </div>
                    <div className="right-proj">
                        <h4>Featured Project</h4>
                        <h5 > Managewise</h5>
                        <div className="featured">

                            <p>A frontend landing page showcasing amazing animation made possible using Framer Motion ,a simple and powerful JavaScript animation library.</p>
                        </div>
                        <ul>
                            <li>React.js</li>
                            <li>Framer Motion</li>
                        </ul>
                        <div className='icons-p'>
                            <li> <a href="https://github.com/ayushQUASAR/Managewise" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li> <a href="https://managewise-seven.vercel.app/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                        </div>
                    </div>
                </div>
                <div className='proj-div'>
                    <div className="leftimg-proje">
                        <div className='img-wrapper'>  <img src={safar} alt="" /></div>
                    </div>
                    <div className="right-proje">
                        <h4>Featured Project</h4>
                        <h5 > Safar</h5>
                        <div className="featurede">

                            <p>A travel and exploration site where user can Book Hotels and tickets for flights .It also provides virtual exploration of historical places through photos and articles. </p>
                        </div>
                        <ul>
                            <li>React.js</li>
                            <li>Django</li>
                            <li>RapidX Api</li>
                        </ul>
                        <div className='icons-pe'>
                            <li><a href="https://github.com/ayushQUASAR/Travel-Exploration-site-made-of-React.js-and-Django" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li> <a href="https://travel-exploration-site-made-of-react-js-and-django.vercel.app/" target='_blank'> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className='proj-div'>
                    <div className="leftimg-proj">
                        <div className='img-wrapper'> <img src={conf} alt="" /></div>
                    </div>
                    <div className="right-proj">
                        <h4>Featured Project</h4>
                        <h5 > Conference Site</h5>
                        <div className="featured">

                            <p>A frontend Conference Information and Registration Portal made for College Frontend Design Hackathon where our Team was awarded Emerging Developer Prize.</p>
                        </div>
                        <ul>
                            <li>React.js</li>
                            <li>Html</li>
                            <li>CSS</li>
                        </ul>
                        <div className='icons-p'>
                            <li> <a href="https://github.com/ayushQUASAR/Conference-app" target='_blank'> <FontAwesomeIcon icon={faGithub} /></a>
                               </li>
                            <li><a href="https://conferencetry.onrender.com/" target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a> </li>
                        </div>
                    </div>
                </div>
                <div className='proj-div'>
                    <div className="leftimg-proje">
                        <div className='img-wrapper'> <img src={nitj} alt="" /></div>
                    </div>
                    <div className="right-proje">
                        <h4>Featured Project</h4>
                        <h5 >Guest House Booking Portal</h5>
                        <div class="featurede">

                            <p>Contributed to  Frontend of the Official Guest House Booking System of our college NIT Jalandhar as minor project. A MERN stack application for Booking guest rooms, admin access,Guest House management ,etc features. </p>
                        </div>
                        <ul>
                            <li>React.js</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>JWT</li>
                            <li>Mongodb</li>
                        </ul>
                        <div className='icons-pe'>
                            <li> <a href="https://github.com/aviralsangal8/guest-house-system/tree/dashboard" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
                            <li><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></li>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project