type projectProps = {
  name: string;
  description: string;
  url: string | undefined;
  github: string;
}

export const Project = ({ name, description, url, github }: projectProps) => {
  return (
    <div className='box'>
      <div className='title'>{name}</div>
      {description}, 
      <a href={github}>Github</a>
      {url !== undefined ? (<a href={url}>Visit</a>) : null}
    </div>
  )
}
