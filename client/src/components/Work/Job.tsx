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
    <div className='job'>
      <div>{company}</div>
      <div>{position}</div>
      <div>{startDate} - {endDate}</div>
      <div>{description}</div>
      <div>{responsibilities}</div>
    </div>
  )
}

export default Job