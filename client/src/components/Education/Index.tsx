import Degree from './Degree';

import './education.css'

interface School {
  name: string;
  degree: string;
  degreeType?: string;
  minor?: string;
  location: string;
  start: string;
  end: string;
  description: string;
  image: string;
  skills: string[];
}

const schools: School[] = [
  {
    name: 'Lighthouse Labs',
    degree: 'Full-Stack web development',
    degreeType: 'Certificate',
    location: 'Toronto, ON',
    start: 'January 2023',
    end: 'March 2023',
    description: 'It program therefore it do',
    image: 'image link will go here',
    skills: ['web dev'],
  },
  {
    name: 'George Brown College',
    degree: 'Sports & Event Marketing',
    degreeType: 'Post-Graduate Certificate',
    location: 'Toronto, ON',
    start: 'January 2017',
    end: 'June 2017',
    description: 'It sell therefore it do',
    image: 'image link will go here',
    skills: ['marketing'],
  },
  {
    name: 'Carleton University',
    degree: 'Philosophy',
    minor: 'Film',
    degreeType: 'Bachelor of Arts',
    location: 'Ottawa, ON',
    start: 'September 2011',
    end: 'May 2016',
    description: 'It be therefore it do.',
    image: 'image link will go here',
    skills: ['critical thinking'],
  },
];

const Education = () => {
  return (
    <div>
      <h3>EDUCATION</h3>
      {schools.map((school, index) => (
        <Degree
          key={index}
          name={school.name}
          degree={school.degree}
          minor={school.minor}
          location={school.location}
          start={school.start}
          end={school.end}
          description={school.description}
          image={school.image}
          skills={school.skills}
        />
      ))}
    </div>
  );
};

export default Education;