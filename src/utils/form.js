import { emailPattern, MIN_INPUT_LENGTH } from '../utils/email';

export const validate = (field) => {
  let isValid = true;
  let errors = {};

  if (!field['sendByName'] || field['sendByName'].length < MIN_INPUT_LENGTH) {
    errors['sendByName'] = 'Please type sender name';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['sendByEmail'] || field['sendByEmail'].length < MIN_INPUT_LENGTH) {
    errors['sendByEmail'] = 'Please type sender email';
    isValid = false;
  } else {
    if (!emailPattern.test(field['sendByEmail'])) {
      errors['sendByEmail'] = 'Please type correct email';
      isValid = false;
    } else {
      isValid = true;
    }
  }

  if (!field['sendToName'] || field['sendToName'].length < MIN_INPUT_LENGTH) {
    errors['sendToName'] = 'Please type recipient name';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['sendToEmail'] || field['sendToEmail'].length < MIN_INPUT_LENGTH) {
    errors['sendToEmail'] = 'Please type recipient email';
    isValid = false;
  } else {
    if (!emailPattern.test(field['sendToEmail'])) {
      errors['sendToEmail'] = 'Please type correct email';
      isValid = false;
    } else {
      isValid = true;
    }
  }

  if (!field['subject'] || field['subject'].length < MIN_INPUT_LENGTH) {
    errors['subject'] = 'Please type subject';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['message'] || field['message'].length < MIN_INPUT_LENGTH) {
    errors['message'] = 'Please type message';
    isValid = false;
  } else {
    isValid = true;
  }

  if (Object.keys(errors).length == 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return { isValid, errors };
};
