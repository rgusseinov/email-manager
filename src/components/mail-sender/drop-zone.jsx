import React from 'react';

function DropZone({ overlayRef, onDragEnter, onDragOver, onDragLeave, onDrop }) {
  return (
    <div
      ref={overlayRef}
      className="overlay hide"
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}>
      <div className="overlay__content">
        <h3 className="overlay__title"> Бросайте файлы сюда, я ловлю </h3>
        <p className="overlay__text">
          Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. <br />
          Размеры файла до 5 МБ
        </p>
      </div>
    </div>
  );
}

export default DropZone;
