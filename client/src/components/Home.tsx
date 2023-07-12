import Projects from './Projects/Index';
import Work from './Work/Index';
import Education from './Education/Index';

import './home.css'

const Home: React.FC = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('projects');
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
            <span className='fade-in delay-4750'>.</span>
          </h4>
        </div>
        <nav>
          <button className='btn-scroll' onClick={handleClickScroll}>
            Projects
          </button>
          <button className='btn-scroll' onClick={handleClickScroll}>
            Work
          </button>
          <button className='btn-scroll' onClick={handleClickScroll}>
            Education
          </button>
        </nav>
      </div>
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work/>
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  );
}

export default Home;