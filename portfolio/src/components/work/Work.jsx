import React, { useState } from 'react'
import './work.css'
const Work = () => {
  const [num,setNum]=useState(0);
  return (
    <div className='work'>
      <h3>Experience</h3>
      <div className="exp">
        <ul>
          <li className='btn-li'> <button onClick={(()=>setNum(0))}>Runshaw</button></li>
          <li className='btn-li'><button onClick={(()=>setNum(1))}>RexAI</button></li>
        </ul>
        {num==0&& <div className="right-exp">
          <h4 >
            <span>Campus Ambassador Intern</span>
            <span><span>&nbsp;@&nbsp;</span><a>International MUN (IMUN)</a></span></h4>
        </div>}
       
       {num==1 && <div className="right-exp">
          <h4 >
            <span>Campus </span>
            <span><span>&nbsp;@&nbsp;</span><a>International MUN (IMUN)</a></span></h4>
        </div>}
      </div>
    </div>
  )
}

export default Work