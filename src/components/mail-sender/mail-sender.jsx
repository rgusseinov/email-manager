import React from 'react';
import { createRef } from 'react/cjs/react.development';
import DropZone from './drop-zone';
import MailForm from './mail-form';
import useMailSender from '../../hooks/use-mail-sender';
import '../../scss/mail-sender.scss';

function MailSender() {
  const fileRef = createRef();
  const overlayRef = createRef();
  const {
    attachmentsLimitInfo,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleSelectFile,
    handleSelectFileChange,
    handleFormChange,
    handleFormSubmit,
    handleRemoveAttachment,
    preventDefaults,
    fileList
  } = useMailSender(fileRef, overlayRef);
  return (
    <div className="main" onDragOver={handleDragOver}>
      <MailForm
        fileList={fileList}
        fileRef={fileRef}
        attachmentsLimitInfo={attachmentsLimitInfo}
        handleDrop={handleDrop}
        handleSelectFile={handleSelectFile}
        handleSelectFileChange={handleSelectFileChange}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        handleRemoveAttachment={handleRemoveAttachment}
        preventDefaults={preventDefaults}
      />
      <DropZone
        overlayRef={overlayRef}
        preventDefaults={preventDefaults}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    </div>
  );
}

export default MailSender;
