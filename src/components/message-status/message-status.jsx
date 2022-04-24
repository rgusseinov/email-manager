import React from 'react';
import { useSelector } from 'react-redux';
import MessageStatusItem from './message-status-item';
import '../../scss/send-history.scss';

function MessageStatus() {
  const { emails } = useSelector((data) => data.emails);
  return (
    <div className="history">
      <div className="container">
        <h2> Отправленные сообщения </h2>
        {emails.length ? (
          <table className="history__table">
            <thead>
              <tr className="history__table-header">
                <td className="history__table-date"> Дата </td>
                <td className="history__table-subject"> Тема </td>
                <td className="history__table-status"> Статус </td>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <MessageStatusItem key={index} email={email} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Сообщения ещё не отправлялись</p>
        )}
      </div>
    </div>
  );
}

export default MessageStatus;
