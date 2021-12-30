import React, { useState } from 'react';
import attachmentIcon from '../../assets/images/attachment.svg';
import removeIcon from '../../assets/images/trash.svg';
import '../../scss/main.scss';

function Main() {
  const [field, setField] = useState({});
  // const [error, setError] = useState({});

  const handleFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setField((state) => ({
      ...state,
      [fieldName]: fieldValue
    }));

    console.log(`field`, field);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main__title">Отправлялка сообщений</div>

        <form onChange={handleFormChange}>
          <div className="main__row">
            <label className="main__label"> От кого </label>
            <div className="main__field-row">
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendByName"
                  className="main__field-group-left"
                  placeholder="Имя"
                />
                <div className="main__message info"></div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendByEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message error"></div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <label className="main__label"> Кому </label>
            <div className="main__field-row">
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendToName"
                  className="main__field-group-left"
                  placeholder="Имя"
                />
                <div className="main__message-info"> </div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendToEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message-success"> </div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <label className="main__label"> Тема письма </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <input
                  type="text"
                  name="subject"
                  className="main__field-group-single"
                  placeholder="Моя тема письма"
                />
                <div className="main__message-info"> </div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <label className="main__label"> Сообщение </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <textarea className="main__field-group-single" name="message"></textarea>
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
        </form>
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

      {/* <div className="overlay">
        <div className="overlay__content">
          <h3 className="overlay__title"> Бросайте файлы сюда, я ловлю </h3>
          <p className="overlay__text">
            Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf)
            и zip-архивы. <br /> Размеры файла до 5 МБ
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Main;
