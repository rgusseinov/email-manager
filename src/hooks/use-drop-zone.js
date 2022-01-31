const useDropZone = (dropZoneRef) => {
  // Close drag & drop zone
  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!dropZoneRef.current.classList.contains('hide')) {
      dropZoneRef.current.classList.add('hide');
    }
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
