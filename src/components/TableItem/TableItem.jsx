import React,{ useRef} from 'react';
import classNames from "classnames";
import s from './TableItem.module.css';

const TableItem = ({ uuid, product,isActive,isSelect, onDelete, onChangeItem,onSelect}) => {
  const nameInput = useRef(null);

  const pressEnter = (e) => {
    if(e.key === "Enter" && nameInput.current) {     
        nameInput.current.focus();

    }   
  }

  const pressEnterName = (e) => {
    if(e.key === "Enter" && nameInput.current) {      
        nameInput.current.blur();
    }
  }
  return (
    <tr key={uuid} className={classNames(s.item, isSelect && s.selected)} onClick={onSelect}>
      <td>
        <p> +-+ </p>
      </td>
      <td>{product}</td>
      <td>
      <input
            type="text"
            name="id"
            maxLength={3}
            id={uuid}
            onChange={onChangeItem}
            readOnly
            pattern="\d{3}"
            onKeyUp={pressEnter}
            className={classNames(s.input, isSelect && s.selected)}
            autoFocus={true}
          />
        </td>
      <td>
      <input
            type="text"
            ref={nameInput}
            name="name"   
            id={uuid}
            onChange={onChangeItem}
            onKeyUp={pressEnterName}
            className={classNames(s.input, isSelect && s.selected)}
          />
        </td>
      <td>
        <button className={s.button} onClick={onDelete}>X</button>
      </td>
    </tr>
  );
};

export default TableItem;
