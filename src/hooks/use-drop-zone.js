const useDropZone = (dropZoneRef) => {
  const handleDragLeave = (e) => {
    e.preventDefault();
    dropZoneRef.current.classList.toggle('hide');
  };
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return {
    dropZoneRef,
    preventDefaults,
    handleDragLeave
  };
};

export default useDropZone;
