import React from 'react';
import removeIcon from '../../assets/images/trash.svg';
import attachmentIcon from '../../assets/images/attachment.svg';

// eslint-disable-next-line react/prop-types
function AttachmentItem(file) {
  const fileData = file.file;

  return (
    <div className="main__row">
      <div className="attachment">
        <div className="attachment__item">
          <div className="attachment__row">
            <div className="attachment__image">
              <img src={attachmentIcon} alt="" />
              <span> {fileData.name} </span>
            </div>
            <div className="attachment__icon">
              <img src={removeIcon} alt="Удалить" />
              <span> Удалить </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentItem;
