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
  const params = transformData(data);
  const bodyParams = 'apiversion=100&json=1&request=' + encodeURIComponent(JSON.stringify(params));

  const request = fetch('https://api.sendsay.ru/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then((res) => {
    return res.json();
  });
  return request;
};

export const getTrackId = (id) => {
  const bodyParams =
    'apiversion=100&json=1&request=' +
    encodeURIComponent(JSON.stringify({ action: 'track.get', id }));
  const request = fetch('https://api.sendsay.ru/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then((res) => {
    return res.json();
  });
  return request;
};
