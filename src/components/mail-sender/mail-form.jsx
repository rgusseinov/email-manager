import React from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import validationSchema from '../../utils/form-validation';
import Attachments from '../attachments/attachments';
import useForm from '../../hooks/use-form';
// import { addEmail } from '../../store/emailSlice';
import '../../scss/mail-sender.scss';
import { addFormDataToStorage } from '../../utils/form';

function MailForm() {
  // const dispatch = useDispatch();
  const { containerRef, handleDragOver } = useForm();
  return (
    <div className="main">
      <div className="container" ref={containerRef} onDragOver={handleDragOver}>
        <div className="main__title">Отправлялка сообщений</div>
        <Formik
          initialValues={{
            sendByName: 'Ruslan',
            sendToName: 'Gusseinov',
            sendByEmail: 'webelive24@gmail.c',
            sendToEmail: 'r.gusseinov@mail.ru',
            subject: 'This is the subject of email',
            message: 'Hello world! im simple email text in text arear'
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            addFormDataToStorage(values);
            //
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="main__row">
                  <label className="main__label"> От кого </label>
                  <div className="main__field-row">
                    <div className="main__field-group">
                      <input
                        type="text"
                        name="sendByName"
                        className="main__field-group-left"
                        placeholder="Имя"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sendByName}
                      />
                      {touched.sendByName && errors.sendByName && (
                        <div className="main__message error">{errors.sendByName}</div>
                      )}
                    </div>
                    <div className="main__field-group">
                      <input
                        type="text"
                        name="sendByEmail"
                        className="main__field-group-right"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sendByEmail}
                      />
                      {touched.sendByEmail && errors.sendByEmail && (
                        <div className="main__message error">{errors.sendByEmail}</div>
                      )}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sendToName}
                      />
                      {touched.sendToName && errors.sendToName && (
                        <div className="main__message error">{errors.sendToName}</div>
                      )}
                    </div>
                    <div className="main__field-group">
                      <input
                        type="text"
                        name="sendToEmail"
                        className="main__field-group-right"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sendToEmail}
                      />
                      {touched.sendToEmail && errors.sendToEmail && (
                        <div className="main__message error">{errors.sendToEmail}</div>
                      )}
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                      {touched.subject && errors.subject && (
                        <div className="main__message error">{errors.subject}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="main__row">
                  <label className="main__label"> Сообщение </label>
                  <div className="main__field-row">
                    <div className="main__field-group single">
                      <textarea
                        className="main__field-group-single"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}></textarea>
                    </div>
                  </div>
                  {touched.message && errors.message && (
                    <div className="main__message error">{errors.message}</div>
                  )}
                </div>
                <div className="main__row">
                  <div className="main__field-row">
                    <div className="main__field-group">
                      <div className="main__field-group-button">
                        <button
                          type="submit"
                          className="field-group__button normal"
                          onClick={handleSubmit}>
                          Отправить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Attachments />
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default MailForm;
