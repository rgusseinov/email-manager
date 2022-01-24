import { useEffect, useState } from 'react';
import { ATTACHMENT_SIZE_LIMIT, isTotalAttachmentsSizeExceeded } from '../utils/form';

const useMailSender = (fileRef, overlayRef) => {
  const [fileList, setFileList] = useState([]);
  const [attachmentsLimitInfo, setAttachmentsLimitInfo] = useState({});

  useEffect(() => {
    const totalAttachmentsSize = fileList.reduce(function (acc, { file }) {
      return (acc += file.size);
    }, 0);
    console.log(totalAttachmentsSize);
    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded };
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
        fileListArr.push({
          id: Math.random().toString().slice(2, 6),
          file
        });
      } else {
        noOfAttachmentsExceededLimit++;
      }
    });

    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded, noOfAttachmentsExceededLimit };
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
        fileListArr.push({
          id: Math.random().toString().slice(2, 6),
          file
        });
      } else {
        noOfAttachmentsExceededLimit++;
      }
    });
    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded, noOfAttachmentsExceededLimit };
    });

    setFileList((prevState) => {
      return [...prevState, ...fileListArr];
    });
  };

  const handleRemoveAttachment = (e) => {
    if (e.target.parentElement.dataset.id) {
      const fileId = e.target.parentElement.dataset.id;
      const filteredItems = fileList.filter((file) => file.id != fileId);
      setFileList(filteredItems);
    }
  };

  return {
    fileList,
    attachmentsLimitInfo,
    handleSelectFile,
    handleSelectFileChange,
    preventDefaults,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleRemoveAttachment
  };
};

export default useMailSender;
