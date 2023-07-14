import { Project } from "./Project"

import './project.css'

const cgrDescription = 'racing';
const cgrStack = ['typescript', 'react', 'bootstrap', 'supabase', 'sql'];

const sureChefDescription = 'cooking'
const sureChefStack = ['javascript', 'openAI', 'axios', 'nodeJS', 'express', 'sql', 'postgresSQL'];

const jungleRailsDescription = 'store';
const jungleRailsStack = ['ruby', 'rails', 'active record', 'postgresSQL', 'bcrypt', 'cypress'];

const Projects = () => {
  return (
    <div className='projects'>
      <Project name={'CGR League'} description={cgrDescription} url={'https://cgr-league.net/'} github={'https://github.com/gtemple/cgr-league'} stack={cgrStack}/>
      <Project name={'SureChef'} description={sureChefDescription} url={undefined} github={'https://github.com/gtemple/sure-chef-final-project'} stack={sureChefStack}/>
      <Project name={'Jungle Rails'} description={jungleRailsDescription} url={undefined} github={'https://github.com/gtemple/jungle-rails'} stack={jungleRailsStack}/>


    </div>
  )
}

export default Projects