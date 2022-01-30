import React from 'react';
import { createRef, Fragment } from 'react/cjs/react.development';
import useForm from '../../hooks/use-form';
import DropZone from './drop-zone';
import AttachmentItem from './attachment-item';
import attachmentIcon from '../../assets/images/attachment.svg';

function Attachments() {
  const fileRef = createRef();
  const dropZoneRef = createRef();

  const {
    preventDefaults,
    handleDrop,
    handleRemoveAttachment,
    handleDragLeave,
    handleSelectFile,
    handleSelectFileChange,
    attachmentList
  } = useForm(fileRef, dropZoneRef);

  return (
    <Fragment>
      <div className="main__row">
        <div className="attachment">
          {attachmentList.map(({ attachment, id }) => (
            <AttachmentItem
              key={id}
              id={id}
              attachment={attachment}
              onRemoveAttachment={handleRemoveAttachment}
            />
          ))}
        </div>
      </div>
      <div className="main__row">
        <div
          className="upload"
          onDragEnter={preventDefaults}
          onDragOver={preventDefaults}
          onDragLeave={preventDefaults}
          onDrop={handleDrop}>
          <div className="upload__item">
            <div className="upload__row">
              <div className="upload__image">
                <img src={attachmentIcon} alt="" />
              </div>
              <input
                type="file"
                ref={fileRef}
                onChange={handleSelectFileChange}
                className="upload__file"
                multiple
              />
              <div className="upload__title hover" onClick={handleSelectFile}>
                Прикрепить файл
              </div>
            </div>
            <div className="upload__row">
              {/* <div className="upload__limit">
                {attachmentsLimitInfo.noOfAttachmentsExceededLimit
                  ? `Максимальный размер одного файла не должен превышать 5 МБ`
                  : ''}
                <br />
                {attachmentsLimitInfo.totalAttachmentsSizeExceeded
                  ? `Объем всех вложении не должен превышать 20 МБ`
                  : ''}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <DropZone
        dropZoneRef={dropZoneRef}
        preventDefaults={preventDefaults}
        onDragEnter={preventDefaults}
        onDragOver={preventDefaults}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    </Fragment>
  );
}

export default Attachments;
