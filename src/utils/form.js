export const ATTACHMENT_SIZE_LIMIT = 5242880; // 5 MB
export const ATTACHMENTS_SIZE_LIMIT = 20971520; // 20 MB
export const MIN_INPUT_LENGTH = 5;

export const isTotalAttachmentsSizeExceeded = (totalAttachmentsSize) => {
  return totalAttachmentsSize > ATTACHMENTS_SIZE_LIMIT ? true : false;
};

export const truncateString = (value, num) => {
  return value.length <= num
    ? value
    : value.slice(0, 19) + '...' + value.slice(value.indexOf('.'), value.length);
};
