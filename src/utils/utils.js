export const TIME_INTERVAL = 3000;
export const getMessageStatus = {
  1: 'В очереди',
  2: 'Отправлено',
  3: 'Ошибка'
};

export const generateMessageStatus = (statusCode) => {
  switch (statusCode) {
    case 1:
      return 'in-progress';
    case 2:
      return 'success';
    case 3:
      return 'error';
    default:
      return 'error';
  }
};

export const getMonthNameRu = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];
