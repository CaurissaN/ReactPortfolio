import React from 'react'
import cn from "./cn.pdf"

function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <section className='flex'>
        <div>
          <h4>Front-end Skills</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h4>Back-end Skills</h4>
          <ul>
            <li>API's</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Rest</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
      <div>
        <h4>View my full resume <a target='_blank' rel="noopener noreferrer" href={cn}>HERE</a>!</h4>
      </div>
    </div>
  )
}

export default Resume
