import React from 'react';
import { useSelector } from 'react-redux';
import MessageStatus from './message-status';

function MessageSent() {
  const { emails } = useSelector((data) => data.emails);
  const emailIndex = emails.findIndex((email) => email.status == 1);
  const sentToEmail = emailIndex != -1 ? emails[emailIndex].sendToEmail : '';
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="main__title">Сообщение поставлено в очередь на отправку</div>
          <p>
            Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты «
            {sentToEmail}» со скоростью электронов.
          </p>
        </div>
      </div>
      <MessageStatus />
    </React.Fragment>
  );
}

export default MessageSent;
