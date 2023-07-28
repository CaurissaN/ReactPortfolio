import React from 'react'
import projectData from "../../portfolio.json"

function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Portfolio</h1>
      <section>
        {projectData.map((proj) => {
          return (
          <div key={proj.id} className='card'>
            <img className='projImg' alt={proj.name} src={proj.image} />
            <h1>{proj.title}</h1>
            <div>
              <a target='blank' href={proj.github}>
              <button>GitHub</button>
              </a>
              <a target='blank' href={proj.live}>
              <button>Live</button>
              </a>
            </div>
          </div>
          )
        })}
      </section>
    </div>
  )
}

export default Portfolio
