import React from 'react';
import '../../scss/send-history.scss';

function MessageStatusItem({ email }) {
  return (
    <tr>
      <tr>
        <td id={email.id}> 30 сентября </td> <td> {email.subject} </td>
        <td className="history__status-success"> Отправлено </td>
      </tr>
    </tr>
  );
}

export default MessageStatusItem;
