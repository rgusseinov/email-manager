export const ATTACHMENT_SIZE_LIMIT = 5242880;
export const ATTACHMENTS_SIZE_LIMIT = 20971520;
export const MIN_INPUT_LENGTH = 5;

export const isTotalAttachmentsSizeExceeded = (totalAttachmentsSize) => {
  return totalAttachmentsSize > ATTACHMENTS_SIZE_LIMIT ? true : false;
};

export const emailPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);
