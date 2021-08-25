import React from 'react'
import './send-history.sass';

function SendHistory(){
  return (
    <div className="history">

      <div className="container">
      <h2> Отправленные сообщения </h2>

        <table className="history__table">
          <tr className="history__table-header">
            <td className="history__table-date"> Дата </td>
            <td className="history__table-subject"> Тема </td>
            <td className="history__table-status"> Статус </td>
          </tr>
          
          <tr>
            <td> 30 сентября </td>
            <td> Тема письма, которая не поместится в эту строку, потому что </td>
            <td className="history__status-success"> Отправлено </td>
          </tr>

          <tr>
            <td> 30 сентября </td>
            <td> Тема письма, которая не поместится в эту строку, потому что </td>
            <td className="history__status-in-progress"> В очереди </td>
          </tr>

          <tr>
            <td> 30 сентября </td>
            <td> Тема письма, которая не поместится в эту строку, потому что </td>
            <td className="history__status-error"> Ошибка </td>
          </tr>
        </table>

      </div>  
    
    </div>
    
  );
}

export default SendHistory;