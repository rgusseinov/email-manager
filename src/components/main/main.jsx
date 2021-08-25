import React from 'react'
import './main.sass';
import attachmentIcom from '../../assets/images/attachment.svg'

function Main(){
  return (
    <div className="container__main-block">
      <div className="main-block__wrapper">

        <form className="main-block__form">
          <h1> Отправлялка сообщении </h1>
          <div className="form-row">
            <label className="form-row__label"> От кого </label>
            <div className="form-row__group">
              <div className="form-row__block">
                <input name="senderName" className="form-row__input left" placeholder="Имя" />
                <div className="message"> </div>
              </div>
              <div className="form-row__block">
                <input name="senderEmail" className="form-row__input right" placeholder="Email" /> 
                <div className="message"> </div>
              </div>
            </div>        
         </div>
         <div className="form-row">
            <label className="form-row__label"> Кому </label>
            <div className="form-row__group">
              <div className="form-row__block">
                <input name="receiptName" className="form-row__input left" placeholder="Имя" />
                  <div className="message"> </div>
              </div>
              <div className="form-row__block">
                <input name="receiptEmail" className="form-row__input right" placeholder="Email" /> 
                <div className="message"> </div>
              </div>
            </div>        
         </div>
         <div className="form-row">
            <label className="form-row__label"> Тема письма </label>
            <div className="form-row__group">
              <div className="form-row__block">
                <input name="subject" className="form-row__input full" placeholder="Моя тема письма" />
                <div className="message"> </div>
              </div>
            </div>        
         </div>
         <div className="form-row">
            <label className="form-row__label"> Сообщение </label>
            <div className="form-row__group">
              <div className="form-row__block">
                <textarea name="message" className="form-row__message">
                    Проекция угловых скоростей, например, поступательно заставляет иначе взглянуть на то, что такое момент силы трения. Движение спутника вращает волчок. Начальное условие движения велико.
                </textarea>
                <div className="message"> </div>
              </div>
            </div>        
         </div>
         <div className="form-row">
            <div className="form-row__group">
              <div className="form-row__block">
                <img src={attachmentIcom} />
                <span> Прикрепить файл </span>
                <div className="message"> </div>
              </div>
            </div>        
         </div>
         <div className="form-row">
            <div className="form-row__group">
              <div className="form-row__block">
                <input type="button" className="button" value="Отправить" />
              </div>
            </div>        
         </div>

        </form>
      </div>      
    </div>
  );
}

export default Main;