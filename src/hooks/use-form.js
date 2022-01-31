import { createRef } from 'react';

const useForm = () => {
  const containerRef = createRef();
  // Show drag & drop zone
  const handleDragOver = (e) => {
    e.preventDefault();
    const overlayBlock = containerRef.current.querySelector('.overlay');
    overlayBlock.classList.remove('hide');
  };

  return {
    containerRef,
    handleDragOver
  };
};

export default useForm;
