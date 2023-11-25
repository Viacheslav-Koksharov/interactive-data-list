import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import s from './TableItem.module.css';

const TableItem = ({
  uuid,
  product,
  isActive,
  isSelect,
  onDelete,
  onChangeItem,
  onSelect,
}) => {
  const nameInput = useRef(null);
  const IdInput = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const pressEnter = e => {
    if (e.key === 'Enter' && nameInput.current) {
      nameInput.current.focus();
      IdInput.current = isActive;
    }
  };

  const pressEnterName = e => {
    if (e.key === 'Enter' && nameInput.current) {
      nameInput.current.blur();
    }
  };

  const changeRange = e => {
    Number(e.target.value) === 0 ? setIsEnabled(false) : setIsEnabled(true);
  };

  return (
    <tr
      key={uuid}
      id={uuid}
      className={classNames(s.item, isSelect && isEnabled && s.selected)}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity: isHovered ? 0.5 : 1 }}
    >
      <td>
        <input
          className={classNames(s.range, !isEnabled && s.rangeOff)}
          type='range'
          min={0}
          max={100}
          step={100}
          onClick={changeRange}
        />
      </td>
      <td>{product}</td>
      <td>
        <input
          type='text'
          ref={IdInput}
          name='id'
          maxLength={3}
          id={uuid}
          onChange={onChangeItem}
          readOnly={isActive || !isEnabled}
          pattern='\d{3}'
          onKeyUp={pressEnter}
          className={classNames(
            s.input,
            isSelect && isEnabled && s.selectedInput,
          )}
          autoFocus={true}
        />
      </td>
      <td>
        <input
          type='text'
          ref={nameInput}
          name='name'
          onChange={onChangeItem}
          onKeyUp={pressEnterName}
          className={classNames(
            s.input,
            isSelect && isEnabled && s.selectedInput,
          )}
          disabled={!isEnabled}
        />
      </td>
      <td>
        <button
          className={s.button}
          title='Удалить строку'
          onClick={e => onDelete(e)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
