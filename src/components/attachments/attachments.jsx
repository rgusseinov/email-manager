import React from 'react';
import { createRef, Fragment } from 'react/cjs/react.development';
import useAttachments from '../../hooks/use-attachments';
import DropZone from './drop-zone';
import AttachmentItem from './attachment-item';
import FileUpload from './file-upload';

function Attachments() {
  const fileRef = createRef();
  const dropZoneRef = createRef();
  const {
    attachmentList,
    handleDrop,
    handleRemoveAttachment,
    handleSelectFileChange,
    handleSelectFile
  } = useAttachments(fileRef, dropZoneRef);
  return (
    <Fragment>
      <div className="main__row">
        <div className="attachment">
          {attachmentList.map(({ attachment, id }) => {
            return (
              <AttachmentItem
                key={id}
                id={id}
                attachment={attachment}
                onRemoveAttachment={handleRemoveAttachment}
              />
            );
          })}
        </div>
      </div>
      <FileUpload
        fileRef={fileRef}
        handleSelectFileChange={handleSelectFileChange}
        handleSelectFile={handleSelectFile}
      />
      <DropZone dropZoneRef={dropZoneRef} onDrop={handleDrop} />
    </Fragment>
  );
}

export default Attachments;
