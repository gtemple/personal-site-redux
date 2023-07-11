import Projects from './Projects';

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
        </nav>
      </div>
      <section id="projects">
        <Projects />
        <>hi</>
      </section>
    </div>
  );
}

export default Home;