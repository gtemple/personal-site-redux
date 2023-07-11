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
        <div>Home</div>
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