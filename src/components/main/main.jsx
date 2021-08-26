import React from 'react'
import './main.sass';
import attachmentIcon from '../../assets/images/attachment.svg';
import removeIcon from '../../assets/images/trash.svg';

function Main(){
  return (
    <div className="main">
      <div className="container">
        <div className="main__title">Отправлялка сообщений</div>        
          
          <div className="main__row">
            <label className="main__label"> От кого </label>
            <div className="main__field-row">
              <div className="main__field-group">
                <input name="senderName" className="main__field-group-left" placeholder="Имя" />
                <div className="main__message info"> </div>
              </div>
              <div className="main__field-group">
                <input name="senderEmail" className="main__field-group-right" placeholder="Email" /> 
                <div className="main__message error"> Email не может быть пустым </div>
              </div>
            </div>       
          </div>

          <div className="main__row">
            <label className="main__label"> Кому </label>
            <div className="main__field-row">
              <div className="main__field-group">
                <input name="senderName" className="main__field-group-left" placeholder="Имя" />
                <div className="main__message-info"> </div>
              </div>
              <div className="main__field-group">
                <input name="senderEmail" className="main__field-group-right" placeholder="Email" /> 
                <div className="main__message-success"> </div>
              </div>
            </div>       
          </div>

          <div className="main__row">
            <label className="main__label"> Тема письма </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <input name="senderName" className="main__field-group-single" placeholder="Моя тема письма" />
                <div className="main__message-info"> </div>
              </div>
            </div>       
          </div>

          <div className="main__row">
            <label className="main__label"> Сообщение </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <textarea className="main__field-group-single" placeholder="Сообщение">
                  Проекция угловых скоростей, например, поступательно заставляет иначе взглянуть на то, что такое момент силы трения. Движение спутника вращает волчок. Начальное условие движения велико. 
                </textarea>
                <div className="main__message-info"> </div>
              </div>
            </div>       
          </div>

          <div className="main__row">
            <div className="upload">

              <div className="upload__item">
                <div className="upload__row">
                  <div className="upload__image">
                    <img src={attachmentIcon} alt="" />
                  </div>
                  <div className="upload__title hover"> Прикрепить файл </div>    
                </div>
              </div>

            </div> 
          </div>


          <div className="main__row">
            <div className="attachment">
                <div className="attachment__item">
                  <div className="attachment__row">
                    <div className="attachment__image">
                      <img src={attachmentIcon} alt="" />
                      <span> File01.jpg </span>
                    </div>
                    <div className="attachment__icon">
                      <img src={removeIcon} alt="" />
                      <span> Удалить </span>                      
                    </div>
                  </div>
                </div>                
                <div className="attachment__item">
                  <div className="attachment__row">
                    <div className="attachment__image">
                      <img src={attachmentIcon} alt="" />
                      <span> Семантические файлы.jpg </span>
                    </div>
                    <div className="attachment__icon">
                      <img src={removeIcon} alt="" />
                      <span> Удалить </span>                      
                    </div>
                  </div>
                </div>
            </div>
          </div>


          <div className="main__row">
            <div className="main__field-row">
              <div className="main__field-group">

                <div className="main__field-group-button">
                  <button className="field-group__button normal"> Отправить </button>
                </div>
                <br />
                <div className="main__field-group-button">
                  <button className="field-group__button hover"> Отправить </button>
                </div>
                <br />
                <div className="main__field-group-button">
                  <button className="field-group__button active"> Отправить </button>
                </div>
                <br />
                <div className="main__field-group-button">
                  <button className="field-group__button disabled"> Отправить </button>
                </div>


              </div>
            </div>       
          </div>

      </div>
    </div>
  );
}

export default Main;