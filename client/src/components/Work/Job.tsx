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
    <>
      <div>
        <span className='background-line'>{company}</span>
      </div>
      
      <div className='job-secondary'>
        <div>{position.toUpperCase()}</div>
        <div>{startDate} - {endDate}</div>
      </div>
    <div className='job-container'>
      <div className='job-description'>{description}</div>
      <div className='responsibilities'>{responsibilities.map((responsibility:string) => <div className='responsibility'>• {responsibility}</div>)}</div>
    </div>
    </>
  )
}

export default Job