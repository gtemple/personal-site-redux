import portrait from '../assets/images/me.jpg'
import { SiInstagram, SiLinkedin, SiGithub, SiGmail, SiLetterboxd } from "react-icons/si";
import './about.css'

export const About = () => {
  return (
    <div className='about'>
      <img className='portrait' src={portrait} />
      <div className='socials'>
        <div className='socials-icon'><a href='https://www.linkedin.com/in/giordano-temple/' target="_blank"><SiLinkedin /></a></div>
        <div className='socials-icon'><a href='https://github.com/gtemple' target='_blank'><SiGithub /></a></div>
        <div className='socials-icon'><a href="mailto:giordanotemple@gmail.com"><SiGmail /></a></div>
        <div className='socials-icon'><a href='https://www.instagram.com/g_temps/' target='_blank'><SiInstagram /></a></div>
        <div className='socials-icon'><a href='https://letterboxd.com/GiordanoT/' target='_blank'><SiLetterboxd /></a></div>
        
      </div>
      <div>

      </div>
    </div>
  )
}
