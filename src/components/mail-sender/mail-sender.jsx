import React from 'react';
import useForms from '../../hooks/useForm';
import attachmentIcon from '../../assets/images/attachment.svg';
import AttachmentItem from './attachment-item';
import { createRef } from 'react/cjs/react.development';
import DropZone from './drop-zone';
import '../../scss/mail-sender.scss';

function MailSender() {
  const fileRef = createRef();
  const overlayRef = createRef();
  const {
    error,
    attachmentsLimitInfo,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleSelectFile,
    handleSelectFileChange,
    handleFormChange,
    handleFormSubmit,
    handleRemoveAttachment,
    preventDefaults,
    fileList
  } = useForms(fileRef, overlayRef);
  return (
    <div className="main" onDragOver={handleDragOver}>
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
            <div
              className="upload"
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
                <div className="upload__row">
                  <div className="upload__limit">
                    {attachmentsLimitInfo.noOfAttachmentsExceededLimit
                      ? `Максимальный размер одного файла не должен превышать 5 МБ`
                      : ''}
                    <br />
                    {attachmentsLimitInfo.totalAttachmentsSizeExceeded
                      ? `Объем всех вложении не должен превышать 20 МБ`
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__row">
            <div className="attachment">
              {fileList.map(({ file, id }) => (
                <AttachmentItem
                  key={id}
                  id={id}
                  file={file}
                  onRemoveAttachment={handleRemoveAttachment}
                />
              ))}
            </div>
          </div>
        </form>
      </div>
      <DropZone
        overlayRef={overlayRef}
        preventDefaults={preventDefaults}
        onDragEnter={preventDefaults}
        onDragOver={preventDefaults}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
    </div>
  );
}

export default MailSender;
