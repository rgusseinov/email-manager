import { createRef } from 'react';

const useForm = () => {
  const containerRef = createRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    const overlayBlock = containerRef.current.querySelector('.overlay');
    overlayBlock.classList.toggle('hide');
  };

  return {
    containerRef,
    handleDragOver
  };
};

export default useForm;
