import React from 'react';
import attachmentIcon from '../../assets/images/attachment.svg';

function FileUpload({ fileRef, handleSelectFileChange, handleSelectFile }) {
  const preventDefaults = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main__row">
      <div
        className="upload"
        onDragEnter={preventDefaults}
        onDragOver={preventDefaults}
        onDragLeave={preventDefaults}>
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
  );
}

export default FileUpload;
