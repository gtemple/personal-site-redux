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

const Degree = ({name, degree, location, start, end, description, image, skills}: DegreeData) => {
  return (
    <div className='degree-container'>
      <h3>{degree}</h3>
      <div>{name}</div>
      <div>{location}</div>
    </div>
  )
}

export default Degree