type JobProps = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

const Job = ({company, position, startDate, endDate, description, responsibilities}: JobProps) => {
  return (
    <div className='job-container'>
      <div><span className='background-line'>{company}</span></div>
      <div>{position}</div>
      <div>{startDate} - {endDate}</div>
      <div>{description}</div>
      <div>{responsibilities.map((responsibility:string) => <div className='start'>• {responsibility}</div>)}</div>
    </div>
  )
}

export default Job