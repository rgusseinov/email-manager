import React from 'react';
import removeIcon from '../../assets/images/trash.svg';
import attachmentIcon from '../../assets/images/attachment.svg';

function AttachmentItem({ file, id, onRemoveAttachment }) {
  return (
    <div className="attachment__item" onClick={onRemoveAttachment}>
      <div className="attachment__row">
        <div className="attachment__image">
          <img src={attachmentIcon} alt="Файл" draggable="false" />
          <span draggable="false"> {file.name} </span>
        </div>
        <div className="attachment__icon" data-id={`${id}`}>
          <img src={removeIcon} className="icon" alt="Удалить" />
          <span className="remove">Удалить</span>
        </div>
      </div>
    </div>
  );
}

export default AttachmentItem;
