import React, { ReactElement } from 'react';
import Projects from './Projects/Index';
import Work from './Work/Index';
import Education from './Education/Index';
import { About } from './About';

import './home.css';

const Home: React.FC = (): ReactElement => {
  const handleClickScroll = (targetId: string): void => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='splash'>
        <div>
          <h1>
            <span className='fade-in delay-1'>GIORDANO </span>
            <span className='fade-in delay-2'>TEMPLE</span>
          </h1>
          <h4>
            <span className='fade-in delay-3'>full</span>
            <span className='fade-in delay-3250'>-stack </span>
            <span className='fade-in delay-3500'>web </span>
            <span className='fade-in delay-3750'>developer</span>
            <span className='fade-in delay-4750 vw5'>.</span>
          </h4>
        </div>
        <nav className='fade-in-2 delay-5250'>
          <button className='btn-scroll' onClick={() => handleClickScroll('projects')}>
            Projects
          </button>
          <button className='btn-scroll' onClick={() => handleClickScroll('work')}>
            Work
          </button>
          <button className='btn-scroll' onClick={() => handleClickScroll('education')}>
            Education
          </button>
        </nav>
      </div>
      <div className='fade-in-2 delay-5250'>
        <hr></hr>
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='work'>
          <Work />
        </section>
        <section id='education'>
          <Education />
        </section>
      </div>
    </div>
  );
};

export default Home;