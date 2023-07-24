import React from 'react'
import me from "../../assets/me.jpg"

function About() {
  return (
    <div className='about'>
      <div className='imgSection'>
        <img src={me} alt='portfolio image of caurissa' />
      </div>
      <h1>About Me</h1>
      <h4>Committed, focused, and victorious.</h4>
      <p>

        Caurissa has an immense passion for Real estate. With four years of industry experience, she has acquired dynamic skills
        to ensure success in real estate. In 2018, she had her start in the industry as an administrative assistant for a
        commercial real estate company. </p>
      <p>
        It was there, that Caurissa fell in love with helping, nourishing and enlightening people to reach their goals in the
        real estate industry. Her approach is to be knowledgeable in all areas, to ensure all her clients needs and avoid
        narrowing into on one niche group.</p>
      <p>
        Outside of her career, Caurissa is a lovely daughter, a heartwarming sister to her 6 siblings and a trustworthy friend.
        She enjoys exploring new hobbies to build her social and analytical skills. She enjoys opportunities to connect with
        people and build community. Caurissa leads with love and lives her life to the fullest.</p>
    </div>
  )
}

export default About
