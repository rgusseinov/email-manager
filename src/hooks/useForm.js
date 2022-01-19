import { createRef, useState } from 'react';
import { validate } from '../utils/form';

const useForms = () => {
  const [field, setField] = useState({});
  const [error, setError] = useState({});
  const [fileList, setFileList] = useState([]);
  const fileRef = createRef();
  const overlayRef = createRef();

  console.log(`ref`, fileRef.current);
  // Drang & Drop handlers
  // 1. Normal select areas
  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (evt) => {
    const fileListArr = [];
    const files = Array.from(evt.target.files);

    files.forEach((file) => {
      fileListArr.push(file);
    });

    setFileList((prevState) => {
      return [...prevState, ...fileListArr];
    });
  };

  // 2. Drag & Drop handlers
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    overlayRef.current.classList.remove('hide');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!overlayRef.current.classList.contains('hide')) {
      overlayRef.current.classList.add('hide');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    overlayRef.current.classList.add('hide');

    const fileListArr = [];
    let fileList = Array.from(files);

    fileList.forEach((file) => {
      fileListArr.push(file);
    });

    setFileList((prevState) => {
      return [...prevState, ...fileListArr];
    });
  };

  // Form field handlers
  const handleFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setField((state) => ({
      ...state,
      [fieldName]: fieldValue
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validate(field);

    if (isValid) {
      console.log(`Success! All fields properly filled.`);
      setError({});
    } else {
      setError(errors);
    }
  };

  const handleRemoveAttachment = (e) => {
    if (e.target.parentElement.dataset.id) {
      const fileId = Number(e.target.parentElement.dataset.id);
      const filteredItems = fileList.filter((file) => file.lastModified !== fileId);
      setFileList(filteredItems);
    }
  };

  return {
    error,
    fileList,
    handleSelectFile,
    handleSelectFileChange,
    preventDefaults,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleFormChange,
    handleFormSubmit,
    handleRemoveAttachment
  };
};

export default useForms;