import Sendsay from 'sendsay-api';

const apiKey = 'Vsdfsfsfdf45rt#re4hfghf4f6hs651DF1df1sdf121sdf12s__3412fds';
const sendsay = new Sendsay({ apiKey });

const transformData = ({ subject, fromName, fromEmail, toName, toEmail, message, attaches }) => {
  return {
    action: 'issue.send.test',
    letter: {
      subject,
      'from.name': fromName,
      'from.email': fromEmail,
      'to.name': toName,
      message: { text: message },
      attaches: attaches.map(({ name, content, encoding }) => ({
        name,
        content,
        encoding
      }))
    },
    sendwhen: 'test',
    mca: [toEmail]
  };
};

export const sendFormData = (data) => {
  return sendsay
    .request(transformData(data))
    .then((res) => res)
    .catch((err) => err);
};

export const getMessageInfo = (id) => {
  return sendsay
    .request({ action: 'track.get', id })
    .then((res) => res)
    .catch((err) => err);
};

export const resetPassword = () => {
  return sendsay
    .request({
      action: 'sys.user.set',
      id: 'Ruslan0688',
      status: '0',
      email: 'r.gusseinov@mail.ru',
      name: 'Ruslan',
      password: 'Abcde'
    })
    .then((res) => res);
};

export const requestData = () => {
  return sendsay
    .request({
      action: 'sys.settings.get',
      list: ['about.id']
    })
    .then((res) => res);
};
