import React from 'react';
import removeIcon from '../../assets/images/trash.svg';
import attachmentIcon from '../../assets/images/attachment.svg';

function AttachmentItem({ file, onRemoveAttachment }) {
  const onDragStart = () => {
    // console.log(`drag start: ${e.target.className}`);
  };
  return (
    <div className="attachment__item" onClick={onRemoveAttachment} onDragStart={onDragStart}>
      <div className="attachment__row">
        <div className="attachment__image">
          <img src={attachmentIcon} alt="Файл" />
          <span> {file.name} </span>
        </div>
        <div className="attachment__icon" data-id={`${file.lastModified}`}>
          <img src={removeIcon} className="icon" alt="Удалить" />
          <span className="remove">Удалить</span>
        </div>
      </div>
    </div>
  );
}

export default AttachmentItem;
