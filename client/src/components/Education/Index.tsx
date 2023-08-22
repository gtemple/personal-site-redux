import Degree from './Degree';

import './education.css'

interface School {
  name: string;
  degree: string;
  degreeType: string;
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
    start: 'January, 2023',
    end: 'March, 2023',
    description: 'It program therefore it do. It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.It program therefore it do.',
    image: 'image link will go here',
    skills: ['web dev', 'front end', 'backend', 'databases', 'frameworks', 'testing', 'peer programming'],
  },
  {
    name: 'George Brown College',
    degree: 'Sports & Event Marketing',
    degreeType: 'Post-Graduate Certificate',
    location: 'Toronto, ON',
    start: 'January, 2017',
    end: 'June, 2017',
    description: 'It sell therefore it do',
    image: 'image link will go here',
    skills: ['SEO', 'marketing', 'interpersonal skills', 'communications'],
  },
  {
    name: 'Carleton University',
    degree: 'Philosophy',
    minor: 'Film',
    degreeType: 'Bachelor of Arts',
    location: 'Ottawa, ON',
    start: 'September, 2011',
    end: 'May 2016',
    description: 'It be therefore it do.',
    image: 'image link will go here',
    skills: ['critical thinking'],
  },
];


const Education = () => {
  return (
    <div>
      <h2 className='start'>EDUCATION</h2>
        <div className='education-container'>
        {schools.map((school, index) => (
          <Degree
            key={index}
            name={school.name}
            degree={school.degree}
            degreeType={school.degreeType}
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
      <div>
        <div className='other'>
            <div className='other-list'><span className='other-title'>Certificates</span> smart serve</div>
            <div className='other-list'><span className='other-title'>Languages</span> english, french</div>
            <div className='other-list'><span className='other-title'> Other Proficiencies</span> davinci resolve</div>
        </div>
      </div>
    </div>
  );
};

export default Education;