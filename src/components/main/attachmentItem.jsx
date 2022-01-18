import React from 'react';

// eslint-disable-next-line react/prop-types
function AttachmentItem(file) {
  console.log(`file`, file.file);
  const fileData = file.file;
  return <div>{fileData.name}</div>;
}

export default AttachmentItem;
