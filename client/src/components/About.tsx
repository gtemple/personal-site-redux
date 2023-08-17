import portrait from '../assets/images/me.jpg'
import { SiInstagram, SiLinkedin, SiGithub, SiGmail, SiLetterboxd } from "react-icons/si";
import './about.css'

const skills = ['english', 'french', 'davinci resolve', 'smart serve'];

export const About = () => {
  return (
    <div className='about'>
      <div>
        <h6>
          Like many others, the 2020 pandemic brought my work to a halt. With extra time on my hands,
          I decided to elevate one of my favorite hobbies, <span className='emphasize'>web development</span>, into something more meaningful.
          I dedicated my days to immersing myself in <span className='emphasize'>The Odin Project's</span> modules, mastering <span className='emphasize'>Ruby on Rails</span> and <span className='emphasize'>data structures</span>.
          But, it wasn't enough.
        </h6>
        <h6>
          In 2021, as life began to regain some normalcy, I seized the opportunity to enroll in the <span className='emphasize'>Lighthouse Labs Full-Stack Web Development bootcamp</span>.
          This experience not only allowed me to meet like-minded peers but also provided valuable insights from seasoned industry professionals.
          Although I excel in <span className='emphasize'>Typescript</span> and <span className='emphasize'>React</span>, I am committed to continuous growth and am currently expanding my expertise in Java.
        </h6>
        <h6>
          Beyond my professional pursuits, I keep up with my passion for <span className='emphasize'>sports</span>, <span className='emphasize'>video games</span>,
          and <span className='emphasize'>travel</span> through various web projects that I actively work on during my free time.
        </h6>
      </div>
      <div className='socials'>
        <div className='socials-icon'><a href='https://www.linkedin.com/in/giordano-temple/' target="_blank"><SiLinkedin /></a></div>
        <div className='socials-icon'><a href='https://github.com/gtemple' target='_blank'><SiGithub /></a></div>
        <div className='socials-icon'><a href="mailto:giordanotemple@gmail.com"><SiGmail /></a></div>
        <div className='socials-icon'><a href='https://www.instagram.com/g_temps/' target='_blank'><SiInstagram /></a></div>
        <div className='socials-icon'><a href='https://letterboxd.com/GiordanoT/' target='_blank'><SiLetterboxd /></a></div>
      </div>
      <div>
        <img className='portrait' src={portrait} />
        <div>non-tech skills</div>
        <div className='skills'>
          {skills.map((skill: string, index: number) => (
            <span className='skill' key={index}>
              {skill}
            </span>
          ))}
  </div>

      </div>
    </div>
  )
}