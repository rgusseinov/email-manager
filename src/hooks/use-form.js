import { useEffect, useState } from 'react';
import {
  ATTACHMENT_SIZE_LIMIT,
  getTotalAttachmentsSize,
  isTotalAttachmentsSizeExceeded
} from '../utils/form';
import { validate } from '../utils/form-validation';

const useForm = (fileRef, dropZoneRef) => {
  const [fieldData, setFieldData] = useState({});
  const [errorInfo, setErrorInfo] = useState({});
  const [attachmentList, setAttachmentList] = useState([]);
  const [attachmentsLimitInfo, setAttachmentsLimitInfo] = useState({});

  useEffect(() => {
    const totalAttachmentsSize = getTotalAttachmentsSize(attachmentList);
    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded };
    });
  }, [attachmentList]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFieldData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validate(fieldData);

    if (isValid) {
      alert(`Success! All fields properly filled.`);
      setErrorInfo({});
    } else {
      setErrorInfo(errors);
    }
  };

  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (e) => {
    const files = Array.from(e.target.files);
    addAttachments(files);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Show drag & drop zone
  const handleDragOver = (e) => {
    e.preventDefault();
    dropZoneRef.current.classList.remove('hide');
  };

  // Close drag & drop zone
  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!dropZoneRef.current.classList.contains('hide')) {
      dropZoneRef.current.classList.add('hide');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    dropZoneRef.current.classList.add('hide');

    let attachmentList = Array.from(files);
    addAttachments(attachmentList);
  };

  const handleRemoveAttachment = (e) => {
    if (e.target.parentElement.dataset.id) {
      const fileId = e.target.parentElement.dataset.id;
      const filteredItems = attachmentList.filter((attachment) => attachment.id != fileId);
      setAttachmentList(filteredItems);
    }
  };

  const addAttachments = (attachments) => {
    const attachmentListArr = [];
    let noOfAttachmentsExceededLimit = 0;
    let totalAttachmentsSize = 0;

    attachments.forEach((file) => {
      if (file.size <= ATTACHMENT_SIZE_LIMIT) {
        totalAttachmentsSize += file.size;
        attachmentListArr.push({
          id: Math.random().toString().slice(2, 6),
          attachment: file
        });
      } else {
        noOfAttachmentsExceededLimit++;
      }
    });

    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded, noOfAttachmentsExceededLimit };
    });

    setAttachmentList((prevState) => {
      return [...prevState, ...attachmentListArr];
    });
  };

  return {
    attachmentList,
    attachmentsLimitInfo,
    errorInfo,
    handleFormChange,
    handleFormSubmit,
    handleSelectFile,
    handleSelectFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleRemoveAttachment,
    preventDefaults
  };
};

export default useForm;
