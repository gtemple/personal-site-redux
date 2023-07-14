type ProjectProps = {
  name: string;
  description: string;
  url: string | undefined;
  github: string;
  stack: string[]
}



export const Project = ({ name, description, url, github, stack }: ProjectProps) => {

  const stackParser = (stackArray: string[]) => {
    return stackArray.map((s: string, index: number) => {
      return (<div className='s' key={index}>{s} hello</div>)
    });
  }
  
  return (
    <div className='box'>
      <div className='title'>{name}</div>
      {description}, 
      <a href={github}>Github</a>
      {url !== undefined ? (<a href={url}>Visit</a>) : null}
      <div>
        <>{stackParser(stack)}</>
      </div>
    </div>
  )
}
