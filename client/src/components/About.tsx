import portrait from '../assets/images/me.jpg'
import { SiInstagram, SiLinkedin, SiGithub, SiGmail, SiLetterboxd } from "react-icons/si";
import './about.css'


export const About = () => {
  return (
    <div className='about'>
      <div>
        <h6>
          <span className='emphasize'>Giordano Temple</span> is a programmer with an exciting portfolio 
          of web development projects, created using his fluency in <span className='emphasize'>Typescript</span> and <span className='emphasize'>React</span>, 
          and is currently working to learn Java and expand the scope of what he can design.
        </h6>
        <h6>
          Having spent much of 2020 immersed in <span className='emphasize'>The Odin Project's</span> modules, 
          where programming first gave him a new outlet for his passion for problem solving, he went on to gain profficiency in
          <span className='emphasize'> Ruby on Rails</span> and is currently focused on mastering <span className='emphasize'>data structures</span>. 
          Ever since, coding has become a focus in his life and career.
        </h6>
        <h6>
          Most recently, this commitment led to his enrollment in — and completion of — the  
          <span className='emphasize'> Lighthouse Labs Full-Stack Web Development bootcamp</span>, where he not only 
          learned valuable insights from industry professionals, but honed his technical abilities, too.
        </h6>
        <h6>
          Based in Toronto, Giordano is open to all programming opportunities as he continues to refine his skill set
           and merge his passion for sports, video games, and travel into various web projects.
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
      </div>
    </div>
  )
}