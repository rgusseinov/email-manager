import * as yup from 'yup';

const validationSchema = yup.object().shape({
  sendByName: yup
    .string()
    .typeError('Обязательно для заполнения')
    .required('Пожалуйста, введите имя отправителя')
    .min(2, 'Мин. длина 2 символа'),
  sendToName: yup
    .string()
    .typeError('Обязательно для заполнения')
    .required('Пожалуйста, введите имя получателя')
    .min(2, 'Мин. длина 2 символа'),
  sendByEmail: yup
    .string()
    .email('Пожалуйста, введите корректный email')
    .required('Обязательно для заполнения'),
  sendToEmail: yup
    .string()
    .email('Пожалуйста, введите корректный email')
    .required('Обязательно для заполнения'),
  subject: yup
    .string()
    .typeError('Обязательно для заполнения')
    .required('Пожалуйста, введите тему сообщения')
    .min(5, 'Мин. длина 5 символа'),
  message: yup
    .string()
    .typeError('Обязательно для заполнения')
    .required('Пожалуйста, введите сообщение')
    .min(5, 'Мин. длина 5 символа')
});

export default validationSchema;
