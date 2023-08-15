import React, { useState } from 'react';
import { Project } from './Project';
import './project.css';

interface ProjectData {
  name: string;
  description: string;
  url?: string;
  image: string;
  github: string;
  stack: string[];
  start: string;
  end: string;
}

const cgrDescription = 'The CGR Racing League site is a passion project that you can visit to stay up to date on the current standings as well go through the statistical history of the league.';
const cgrStack = ['typescript', 'react', 'bootstrap', 'supabase', 'sql', 'cors'];

const sureChefDescription = `Our AI-powered platform allows you to keep track of your kitchen inventory and generates recipe ideas for you based on the ingredients you have on hand. With SureChef, you'll never have to worry about wasting food or struggling to come up with meal ideas again.`;

const sureChefStack = ['javascript', 'react', 'openAI', 'axios', 'nodeJS', 'express', 'sql', 'postgresSQL', 'userfront', 'bootstrap', 'cors', 'destr'];

const jungleRailsDescription = 'Whether you\'re looking to add some green to your home or your garden, Jungle will satisfy your needs. Jungle is an online storefront specializing in the sale of plants and includes POS capabilites.'
const jungleRailsStack = ['ruby', 'rails', 'active record', 'postgresSQL', 'bcrypt', 'cypress', 'rspec'];

const educationalPostingBoardDescription = 'Resource Wall is a single-page app that allows users to save external resources in a central place that is publicly available to any user. Posts include a title, description, image and link. Users have the ability to like, comment, and rate other posts.';
const educationalPostingBoardStack = ['javascript', 'jQuery', 'express', 'nodeJS', 'bcrypt', 'bootstrap', 'sass', 'ejs', 'postgresSQL'];

const allProjects: ProjectData[] = [
  {
    name: 'CGR League',
    description: cgrDescription,
    url: 'https://cgr-league.net/',
    image: 'cgrLeague.png',
    github: 'https://github.com/gtemple/cgr-league',
    stack: cgrStack,
    start: 'April 2023',
    end: 'present'
  },
  {
    name: 'SureChef',
    description: sureChefDescription,
    url: undefined,
    image: 'sureChef.png',
    github: 'https://github.com/gtemple/sure-chef-final-project',
    stack: sureChefStack,
    start: 'March 2023',
    end: 'March 2023'
  },
  {
    name: 'Jungle Rails',
    description: jungleRailsDescription,
    url: undefined,
    image: 'jungleRails.png',
    github: 'https://github.com/gtemple/jungle-rails',
    stack: jungleRailsStack,
    start: 'March 2023',
    end: 'March 2023'
  },
  {
    name: 'Educational Posting Board',
    description: educationalPostingBoardDescription,
    url: undefined,
    image: 'educationalJobPosting.png',
    github: 'https://github.com/gtemple/Educational-Posting-Board',
    stack: educationalPostingBoardStack,
    start: 'February 2023',
    end: 'February 2023'
  },
];

const Projects: React.FC = () => {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const handleStackClick = (stack: string) => {
    if (selectedStacks.includes(stack)) {
      setSelectedStacks(selectedStacks.filter((selected) => selected !== stack));
    } else {
      setSelectedStacks([...selectedStacks, stack]);
    }
  };

  const filteredProjects = allProjects.filter((project) => {
    if (selectedStacks.length === 0) {
      return true;
    }
    return selectedStacks.every((selectedStack) => project.stack.includes(selectedStack));
  });

  const uniqueStacks = [...new Set(allProjects.flatMap((project) => project.stack))].sort();

  return (
    <div className='project-container'>
      <h2 className='start'>PROJECTS</h2>
      <div className='techs-container'>
        <h3>Filter my projects</h3>
        <div className='techs'>
          {uniqueStacks.map((stack, index) => (
            <div
              className={`${stack.toLowerCase().split(' ').join('-')} tech ${selectedStacks.includes(stack) ? 'selected' : ''}`}
              key={index}
              onClick={() => handleStackClick(stack)}
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
      <div className='projects'>
        {filteredProjects.length !== 0 ? (
          filteredProjects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              image={project.image}
              description={project.description}
              url={project.url}
              github={project.github}
              stack={project.stack}
            />
          ))
        ) : (
          <h3>I don't have any projects that include all of the selected technologies!</h3>
        )}
      </div>
    </div>
  );
};

export default Projects;