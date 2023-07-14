import { Project } from "./Project"

import './project.css'

const cgrDescription = 'racing'
const cgrStack = ['supabase'];
const sureChefDescription = 'cooking'
const sureChefStack = ['javascript', 'openAI API']

const Projects = () => {
  return (
    <div className='projects'>
      <Project name={'CGR League'} description={cgrDescription} url={'https://cgr-league.net/'} github={'https://github.com/gtemple/cgr-league'} stack={cgrStack}/>
      <Project name={'SureChef'} description={sureChefDescription} url={undefined} github={'https://github.com/gtemple/sure-chef-final-project'} stack={sureChefStack}/>

    </div>
  )
}

export default Projects