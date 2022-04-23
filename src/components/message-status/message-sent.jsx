import React from 'react';
import MessageStatus from './message-status';
import '../../scss/send-history.scss';

function MessageSent() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="main__title">Сообщение поставлено в очередь на отправку</div>
          <p>
            Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты
            «abc@my.com» со скоростью электронов.
          </p>
        </div>
      </div>
      <MessageStatus />
    </React.Fragment>
  );
}

export default MessageSent;
