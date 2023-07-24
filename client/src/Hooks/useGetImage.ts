import { useEffect, useState } from 'react';

const useGetImage = (imageName: string) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
          const importedImage = await import(`../assets/project-images/${imageName}`);
          setImg(importedImage.default);
  {console.log(img)}

      } catch (err) {
        console.error('Failed to load image:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageName]);
  return { loading, img };
};

export default useGetImage;