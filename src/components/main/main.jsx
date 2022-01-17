import React, { createRef, useState } from 'react';
import attachmentIcon from '../../assets/images/attachment.svg';
// import removeIcon from '../../assets/images/trash.svg';
import '../../scss/main.scss';
import { validate } from '../../utils/form';

function Main() {
  const [field, setField] = useState({});
  const [error, setError] = useState({});
  const fileRef = createRef();
  // Drang & Drop handlers
  // 2. Normal select areas
  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (evt) => {
    const { files } = evt.target;

    Array.from(files).forEach((file) => {
      console.log(file);
    });
  };

  // Form field handlers
  const handleFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setField((state) => ({
      ...state,
      [fieldName]: fieldValue
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validate(field);

    if (isValid) {
      console.log(`Success! All fields properly filled.`);
    } else {
      setError(errors);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main__title">Отправлялка сообщений</div>

        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
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
                <div className="main__message error">{error['sendByName']}</div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendByEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message error">{error['sendByEmail']}</div>
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
                <div className="main__message error">{error['sendToName']}</div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendToEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message error">{error['sendToEmail']}</div>
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
                <div className="main__message error">{error['subject']}</div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <label className="main__label"> Сообщение </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <textarea className="main__field-group-single" name="message"></textarea>
                <div className="main__message error">{error['message']}</div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <div className="main__field-row">
              <div className="main__field-group">
                <div className="main__field-group-button">
                  <button className="field-group__button normal"> Отправить </button>
                </div>
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
                  <input
                    type="file"
                    ref={fileRef}
                    onChange={handleSelectFileChange}
                    className="upload__file"
                    multiple
                  />
                  <div className="upload__title hover" onClick={handleSelectFile}>
                    Прикрепить файл
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
