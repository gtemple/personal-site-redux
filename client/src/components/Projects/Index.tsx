import { Project } from "./Project"

import './project.css'

const cgrDescription = 'racing'
const sureChefDescription = 'cooking'

const Projects = () => {
  return (
    <div className='projects'>
      <Project name={'CGR League'} description={cgrDescription} url={'https://cgr-league.net/'} github={'https://github.com/gtemple/cgr-league'}/>
      <Project name={'SureChef'} description={sureChefDescription} url={undefined} github={'https://github.com/gtemple/sure-chef-final-project'}/>

    </div>
  )
}

export default Projects