import Job from "./Job"

import './work.css'

const jobs = [
  {
    'company': 'Temple and Temple Tours inc.',
    'position': 'Operations Manager',
    'startDate': 'June 2011',
    'endDate': 'November 2022',
    'description': 'tours n stuff',
    'responsibilities': ['calls', 'emails']
  },
  {
    'company': 'Temple and Temple Tours inc.',
    'position': 'Operations Manager',
    'startDate': 'June 2011',
    'endDate': 'November 2022',
    'description': 'tours n stuff',
    'responsibilities': ['calls', 'emails']
  },
]

const Work = () => {
  return (
    <div>
            {jobs.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          position={job.position}
          startDate={job.startDate}
          endDate={job.endDate}
          description={job.description}
          responsibilities={job.responsibilities}
        />
      ))}
    </div>
  )
}

export default Work