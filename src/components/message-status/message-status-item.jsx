import React from 'react';
import { generateMessageStatus, getMessageStatus, getMonthNameRu } from '../../utils/utils';

function MessageStatusItem({ email }) {
  const statusName = getMessageStatus[email.status];
  const statusClass = generateMessageStatus(email.status);
  const monthNameRu = `${new Date().getDate()} ${getMonthNameRu[new Date().getMonth()]}`;
  return (
    <tr>
      <td>{monthNameRu}</td>
      <td>{email.subject}</td>
      <td className={`history__status-${statusClass}`}>{statusName}</td>
    </tr>
  );
}

export default MessageStatusItem;
