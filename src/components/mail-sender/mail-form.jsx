import React, { createRef } from 'react';
import useForm from '../../hooks/use-form';
import DropZone from './drop-zone';
import AttachmentItem from './attachment-item';
import attachmentIcon from '../../assets/images/attachment.svg';
import '../../scss/mail-sender.scss';

function MailForm() {
  const fileRef = createRef();
  const dropZoneRef = createRef();
  const {
    attachmentList,
    attachmentsLimitInfo,
    errorInfo,
    handleFormChange,
    handleFormSubmit,
    handleSelectFile,
    handleSelectFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleRemoveAttachment,
    preventDefaults
  } = useForm(fileRef, dropZoneRef);
  return (
    <div className="main">
      <div className="container" onDragOver={handleDragOver}>
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
                <div className="main__message error">{errorInfo['sendByName']}</div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendByEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message error">{errorInfo['sendByEmail']}</div>
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
                <div className="main__message error">{errorInfo['sendToName']}</div>
              </div>
              <div className="main__field-group">
                <input
                  type="text"
                  name="sendToEmail"
                  className="main__field-group-right"
                  placeholder="Email"
                />
                <div className="main__message error">{errorInfo['sendToEmail']}</div>
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
                <div className="main__message error">{errorInfo['subject']}</div>
              </div>
            </div>
          </div>

          <div className="main__row">
            <label className="main__label"> Сообщение </label>
            <div className="main__field-row">
              <div className="main__field-group single">
                <textarea className="main__field-group-single" name="message"></textarea>
                <div className="main__message error">{errorInfo['message']}</div>
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
            <div className="attachment">
              {attachmentList.map(({ attachment, id }) => (
                <AttachmentItem
                  key={id}
                  id={id}
                  attachment={attachment}
                  onRemoveAttachment={handleRemoveAttachment}
                />
              ))}
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
          <DropZone
            dropZoneRef={dropZoneRef}
            preventDefaults={preventDefaults}
            onDragEnter={preventDefaults}
            onDragOver={preventDefaults}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          />
        </form>
      </div>
    </div>
  );
}

export default MailForm;
