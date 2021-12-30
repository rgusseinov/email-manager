import { emailPattern } from '../utils/email';

export const validate = (field) => {
  let isValid = true;
  let errors = {};
  const MIN_INPUT_LENGTH = 5;

  if (!field['sendByName']) {
    errors['sendByName'] = 'Please type sender name';
    isValid = false;
  } else if (field['sendByName'].length < MIN_INPUT_LENGTH) {
    errors['sendByName'] = 'Please type sender name';
    isValid = false;
  }

  if (!field['sendByEmail']) {
    errors['sendByEmail'] = 'Please type sender email';
    isValid = false;
  } else {
    if (!emailPattern.test(field['sendByEmail'])) {
      isValid = false;
      errors['sendByEmail'] = 'Please enter valid email address';
    }
  }

  if (!field['sendToName']) {
    errors['sendToName'] = 'Please type recipient name';
    isValid = false;
  } else if (field['sendToName'].length < MIN_INPUT_LENGTH) {
    errors['sendToName'] = 'Please type recipient name';
    isValid = false;
  }

  if (!field['sendToEmail']) {
    errors['sendToEmail'] = 'Please type recipient email';
    isValid = false;
  } else if (field['sendToEmail'].length < MIN_INPUT_LENGTH) {
    errors['sendToEmail'] = 'Please type recipient email';
    isValid = false;
  }

  if (!field['subject']) {
    errors['subject'] = 'Please type subject';
    isValid = false;
  } else if (field['subject'].length < MIN_INPUT_LENGTH) {
    errors['subject'] = 'Please type subject';
    isValid = false;
  }

  if (!field['message']) {
    errors['message'] = 'Please type message';
    isValid = false;
  } else if (field['message'].length < MIN_INPUT_LENGTH) {
    errors['message'] = 'Please type message';
    isValid = false;
  }

  return { isValid, errors };
};
