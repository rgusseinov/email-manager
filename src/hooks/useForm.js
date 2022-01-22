import { useEffect, useState } from 'react';
import { ATTACHMENT_SIZE_LIMIT, isTotalAttachmentsSizeExceeded } from '../utils/email';
import { validate } from '../utils/form';

const useForms = (fileRef, overlayRef) => {
  const [field, setField] = useState({});
  const [error, setError] = useState({});
  const [fileList, setFileList] = useState([]);
  const [attachmentsLimitInfo, setAttachmentsLimitInfo] = useState({});

  useEffect(() => {
    const totalAttachmentsSize = fileList.reduce(function (acc, cur) {
      return (acc += cur.size);
    }, 0);

    setAttachmentsLimitInfo((prevState) => {
      const allowedAttachmentsTotalSize = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, allowedAttachmentsTotalSize, noOfAttachmentsExceededLimit: 0 };
    });
  }, [fileList]);

  // Drang & Drop handlers
  // 1. Normal select areas
  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (evt) => {
    const fileListArr = [];
    const files = Array.from(evt.target.files);

    let noOfAttachmentsExceededLimit = 0;
    let totalAttachmentsSize = 0;

    files.forEach((file) => {
      if (file.size <= ATTACHMENT_SIZE_LIMIT) {
        totalAttachmentsSize += file.size;
        fileListArr.push(file);
      } else {
        noOfAttachmentsExceededLimit++;
      }
    });

    setAttachmentsLimitInfo((prevState) => {
      const allowedAttachmentsTotalSize = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, allowedAttachmentsTotalSize, noOfAttachmentsExceededLimit };
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

  // Show drag & drop zone
  const handleDragOver = (e) => {
    e.preventDefault();
    overlayRef.current.classList.remove('hide');
  };

  // Close drag & drop zone
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

    let noOfAttachmentsExceededLimit = 0;
    let totalAttachmentsSize = 0;

    fileList.forEach((file) => {
      if (file.size <= ATTACHMENT_SIZE_LIMIT) {
        totalAttachmentsSize += file.size;
        fileListArr.push(file);
      } else {
        noOfAttachmentsExceededLimit++;
      }
    });
    // console.log(`noOfAttachmentsExceededLimit`, noOfAttachmentsExceededLimit);
    setAttachmentsLimitInfo((prevState) => {
      const allowedAttachmentsTotalSize = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, allowedAttachmentsTotalSize, noOfAttachmentsExceededLimit };
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

    // console.log(`fileList`, fileList);
  };

  return {
    error,
    fileList,
    attachmentsLimitInfo,
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
