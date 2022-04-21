import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/send-history.scss';

function MessageSent() {
  const { emails } = useSelector((data) => data.emails);
  console.log(`emails`, emails);
  const emailMarkup = emails.map((email) => `<p> ${email.subject} </p>`);

  return (
    <div className="main">
      <div className="container">
        <div className="main__title">Сообщение поставлено в очередь на отправку</div>
        <p>
          Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты «abc@my.com»
          со скоростью электронов.
        </p>
        {emailMarkup}
      </div>
    </div>
  );
}

export default MessageSent;
