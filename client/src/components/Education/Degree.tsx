type DegreeData = {
  name: string,
  degree: string,
  minor?: string,
  location: string,
  start: string,
  end: string,
  description: string,
  image: string,
  skills: string[]
}

const Degree = ({name, degree, location, start, end, description, skills}: DegreeData) => {

  const skillsParser = (skillArray: string[]) => {
    return skillArray.map((s: string, index: number) => {
      return (<div className={`${s.toLowerCase().split(' ').join('-')} skill`} key={index}>{s}</div>)
    });
  }

  return (
    <div className='degree-container'>
      <div>
        <h3>{degree}</h3>
        <div>
          <div>{name}</div>
          <div>{start} - {end}</div>
        </div>
      </div>
      <div>
        <div>{location}</div>
      </div>
      <div>
        <div className='skills'>Skills {skillsParser(skills)}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default Degree