import React from 'react';
import useDropZone from '../../hooks/use-drop-zone';

function DropZone({ dropZoneRef, onDrop }) {
  const { preventDefaults, handleDragLeave } = useDropZone(dropZoneRef);
  return (
    <div
      ref={dropZoneRef}
      className="overlay hide"
      onDragOver={preventDefaults}
      onDragEnter={preventDefaults}
      onDragLeave={handleDragLeave}
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
