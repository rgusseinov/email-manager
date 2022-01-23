import { MIN_INPUT_LENGTH } from './form';

export const validate = (field) => {
  let isValid = true;
  let errors = {};

  if (!field['sendByName'] || field['sendByName'].length < MIN_INPUT_LENGTH) {
    errors['sendByName'] = 'Пожалуйста, введите имя отправителя';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['sendByEmail'] || field['sendByEmail'].length < MIN_INPUT_LENGTH) {
    errors['sendByEmail'] = 'Пожалуйста, введите Email отправителя';
    isValid = false;
  } else {
    if (!validEmailPattern.test(field['sendByEmail'])) {
      errors['sendByEmail'] = 'Пожалуйста, введите корректный Email';
      isValid = false;
    } else {
      isValid = true;
    }
  }

  if (!field['sendToName'] || field['sendToName'].length < MIN_INPUT_LENGTH) {
    errors['sendToName'] = 'Пожалуйста, введите имя получателя';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['sendToEmail'] || field['sendToEmail'].length < MIN_INPUT_LENGTH) {
    errors['sendToEmail'] = 'Пожалуйста, введите Email получателя';
    isValid = false;
  } else {
    if (!validEmailPattern.test(field['sendToEmail'])) {
      errors['sendToEmail'] = 'Пожалуйста, введите корректный Email';
      isValid = false;
    } else {
      isValid = true;
    }
  }

  if (!field['subject'] || field['subject'].length < MIN_INPUT_LENGTH) {
    errors['subject'] = 'Пожалуйста, введите тему сообщения';
    isValid = false;
  } else {
    isValid = true;
  }

  if (!field['message'] || field['message'].length < MIN_INPUT_LENGTH) {
    errors['message'] = 'Пожалуйста, введите соотщение';
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

export const validEmailPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);
