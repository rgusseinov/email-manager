import React from 'react';

function DropZone({ overlayRef, preventDefaults, handleDragLeave, handleDrop }) {
  console.log(`overlayRef`, overlayRef);
  return (
    <div
      ref={overlayRef}
      className="overlay hide"
      onDragEnter={preventDefaults}
      onDragOver={preventDefaults}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <div className="overlay__content">
        <h3 className="overlay__title"> Бросайте файлы сюда, я ловлю </h3>
        <p className="overlay__text">
          Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы.
          {/* Размеры файла до 5 МБ */}
        </p>
      </div>
    </div>
  );
}

export default DropZone;
