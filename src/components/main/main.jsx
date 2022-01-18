import React, { createRef, useEffect, useState } from 'react';
import attachmentIcon from '../../assets/images/attachment.svg';
// import removeIcon from '../../assets/images/trash.svg';
import { validate } from '../../utils/form';
import AttachmentItem from './attachmentItem';
import '../../scss/main.scss';

function Main() {
  const [field, setField] = useState({});
  const [error, setError] = useState({});
  const [fileList, setFileList] = useState([]);
  const fileRef = createRef();
  const uploadAreaRef = createRef();

  useEffect(() => {
    // console.log(`uploadAreaRef`, uploadAreaRef.current);
  });

  // Drang & Drop handlers
  // 2. Normal select areas
  const handleSelectFile = () => fileRef.current.click();

  const handleSelectFileChange = (evt) => {
    const fileListArr = [];

    const files = Array.from(evt.target.files);

    files.forEach((file) => {
      fileListArr.push(file);
    });

    setFileList((prevState) => {
      return [...prevState, ...fileListArr];
    });
  };

  // Drag & Drop handlers

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;

    const fileListArr = [];
    let fileList = Array.from(files);

    fileList.forEach((file) => {
      fileListArr.push(file);
    });

    // console.log(files);

    setFileList((prevState) => {
      return [...prevState, ...fileListArr];
    });

    // console.log(`files`, files);
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
  // console.log(`fileList`, fileList);
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
          {/* 'dragenter', 'dragover', 'dragleave', 'drop'] */}
          <div className="main__row">
            <div
              className="upload"
              ref={uploadAreaRef}
              onDragEnter={preventDefaults}
              onDragOver={preventDefaults}
              onDragLeave={preventDefaults}
              onDrop={handleDrop}>
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
          {fileList.map((file, index) => (
            <AttachmentItem key={index} file={file} />
          ))}
        </form>
      </div>
    </div>
  );
}

export default Main;
