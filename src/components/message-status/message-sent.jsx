import React from 'react';
import '../../scss/send-history.scss';

function MessageSent() {
  return (
    <div className="main">
      <div className="container">
        <div className="main__title">Сообщение поставлено в очередь на отправку</div>
        <p>
          Совсем скоро сообщений вылетит из сервера, и будет двигаться в сторону почты получателя
          abc@mail.ru со скоростью электронов.
        </p>
      </div>
    </div>
  );
}

export default MessageSent;
