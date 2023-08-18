import Job from "./Job"

import './work.css'

const jobs = [
  {
    'company': 'Temple and Temple Tours inc.',
    'position': 'Operations Manager',
    'startDate': 'September 2019',
    'endDate': 'Current',
    'description': 'Temple and Temple Tours focuses on educational travel around the world for both Canadian and International students.',
    'responsibilities': ['Built relationships with new clients, expanding our client list.',
                        'Coordinated dozens of excursions to five different cities across Canada.',
                        'Facilitated transportation, hotel and activity bookings for clients based on cultural interests of each destination.',
                        'Educated clients on city geography, history, and landmarks, communicating in both English and French.',
                        'Led and managed 25 to 55 clients per excursion on guided tours of popular cities and locations around Canada.'
                        ]
  },
  {
    'company': 'Republic',
    'position': 'Account Coordinator',
    'startDate': 'May 2018',
    'endDate': 'May 2019',
    'description': 'A small marketing agency that provides research, planing, and strategy through in-house creative and execution.',
    'responsibilities': ['Coordinated multiple event and sponsorship activations.',
                        'Coordinated and supported on multiple multi-channel campaigns.',
                        'Developed workplans, briefs, and tracked budgets to ensure projects were completed on-time and within budget.',
                        'Managed day-to-day communications with media, creative, web and event partners.',
                        'Acted as the main point-of-contact with clients, maintaining and growing partnerships.'
                      ]
  },
]

const Work = () => {
  return (
    <div>
      <h2 className='start'>WORK</h2>
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