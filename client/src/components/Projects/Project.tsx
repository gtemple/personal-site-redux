import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
};

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  url: string | undefined;
  github: string;
  stack: string[];
};

export const Project = ({ name, description, url, github, stack, image }: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stackParser = (stackArray: string[]) => {
    return stackArray.sort().map((s: string, index: number) => {
      return <div className={`${s.toLowerCase().split(' ').join('-')} tech`} key={index}>{s}</div>;
    });
  };

  return (
    <div className='box'>
      <div className='title'>{name}</div>
      <img
        onClick={handleOpen}
        className='project-image'
        src={`/assets/${image}`}
        alt={name}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <img
            onClick={handleOpen}
            className='project-image-open'
            src={`/assets/${image}`}
            alt={name}
          />
        </Box>
      </Modal>
      <div className='urls'>
        <a href={github}>Github</a>
        {url !== undefined ? <a href={url}>Visit</a> : null}
      </div>
        <div>
          <p>{description}</p>
          <div className='stack'>{stackParser(stack)}</div>
        </div>
    </div>
  );
};