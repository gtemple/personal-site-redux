type DegreeData = {
  name: string,
  degree: string,
  minor?: string,
  degreeType: string,
  location: string,
  start: string,
  end: string,
  description: string,
  image: string,
  skills: string[]
}

const Degree = ({name, degree, degreeType, location, start, end}: DegreeData) => {

  // const skillsParser = (skillArray: string[]) => {
  //   return skillArray.map((s: string, index: number) => {
  //     return (<div className={`${s.toLowerCase().split(' ').join('-')} skill`} key={index}>{s}</div>)
  //   });
  // }

  return (
    <div className='degree-container'>
      <div>
        <div className='background-line'>{name}</div>
        <div>
          <div className="degree-type">{degree} // <br></br>{degreeType}</div>
          <div>{start} - {end}</div>
          <div>{location}</div>
        </div>
      </div>
    </div>
  )
}

export default Degree