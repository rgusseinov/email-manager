export const ATTACHMENT_SIZE_LIMIT = 5242880; // 5 MB
export const ATTACHMENTS_SIZE_LIMIT = 20971520; // 20 MB
export const MIN_INPUT_LENGTH = 2;
export const ATTACHMENT_NAME_LIMIT = 27;

export const isTotalAttachmentsSizeExceeded = (totalAttachmentsSize) => {
  return totalAttachmentsSize > ATTACHMENTS_SIZE_LIMIT ? true : false;
};

export const truncateString = (value, num) => {
  return value.length <= num
    ? value
    : value.slice(0, 19) + '...' + value.slice(value.indexOf('.'), value.length);
};

export const getTotalAttachmentsSize = (attachmentList) => {
  return attachmentList.reduce((acc, { attachment }) => (acc += attachment.size), 0);
};

/* subject: values.subject,
fromName: values.sendByName,
fromEmail: values.sendByEmail,
toName: values.sendToName,
toEmail: values.sendToEmail,
message: values.message,
attaches: [{ name: 'Email1', content: 'dsfsf', encoding: 'base64' }] */

export const addFormDataToStorage = (data) => {
  let emailsArr = JSON.parse(localStorage.getItem('emails')) || [];
  emailsArr.push(data);
  localStorage.setItem('emails', JSON.stringify(emailsArr));
};
