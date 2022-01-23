export const ATTACHMENT_SIZE_LIMIT = 5242880; // 5 MB
export const ATTACHMENTS_SIZE_LIMIT = 20971520; // 20 MB
export const MIN_INPUT_LENGTH = 5;

export const isTotalAttachmentsSizeExceeded = (totalAttachmentsSize) => {
  return totalAttachmentsSize > ATTACHMENTS_SIZE_LIMIT ? true : false;
};
