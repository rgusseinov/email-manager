import { useEffect, useState } from 'react';
import {
  ATTACHMENT_SIZE_LIMIT,
  getTotalAttachmentsSize,
  isTotalAttachmentsSizeExceeded
} from '../utils/form';

const useAttachments = (fileRef, dropZoneRef) => {
  const [attachmentList, setAttachmentList] = useState([]);
  const [attachmentsLimitInfo, setAttachmentsLimitInfo] = useState({});

  useEffect(() => {
    const totalAttachmentsSize = getTotalAttachmentsSize(attachmentList);
    setAttachmentsLimitInfo((prevState) => {
      const totalAttachmentsSizeExceeded = isTotalAttachmentsSizeExceeded(totalAttachmentsSize);
      return { ...prevState, totalAttachmentsSizeExceeded };
    });
  }, [attachmentList]);

  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (e) => {
    const files = Array.from(e.target.files);
    renderAttachments(files);
  };

  const handleRemoveAttachment = (e) => {
    if (e.target.parentElement.dataset.id) {
      const currentAttachmentId = e.target.parentElement.dataset.id;
      const filteredItems = attachmentList.filter(
        (attachment) => attachment.id != currentAttachmentId
      );
      setAttachmentList(filteredItems);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    let attachmentList = Array.from(files);
    renderAttachments(attachmentList);

    const overlayBlock = dropZoneRef.current;
    overlayBlock.classList.add('hide');
  };

  const renderAttachments = (attachments) => {
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
    handleSelectFile,
    handleSelectFileChange,
    handleRemoveAttachment,
    handleDrop
  };
};

export default useAttachments;
