type ProjectProps = {
  name: string;
  description: string;
  image: string;
  url: string | undefined;
  github: string;
  stack: string[];
};

export const Project = ({ name, description, url, github, stack, image }: ProjectProps) => {
  const stackParser = (stackArray: string[]) => {
    return stackArray.sort().map((s: string, index: number) => {
      return <div className={`${s.toLowerCase().split(' ').join('-')} tech`} key={index}>{s}</div>;
    });
  };

  return (
    <div className='box'>
      <div className='title'>{name}</div>
      <img className='project-image' src={`/assets/${image}`} alt={name} />
      {description},
      <a href={github}>Github</a>
      {url !== undefined ? <a href={url}>Visit</a> : null}
      <div>
        <div className='stack'>{stackParser(stack)}</div>
      </div>
    </div>
  );
};