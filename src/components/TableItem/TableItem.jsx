import React,{useState, useRef} from 'react';
import classNames from "classnames";
import s from './TableItem.module.css';

const TableItem = ({ uuid, product,isActive,isSelect, onDelete, onChangeItem,onSelect}) => {
  const nameInput = useRef(null);
  const IdInput = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  const pressEnter = (e) => {
    if(e.key === "Enter" && nameInput.current) {     
        nameInput.current.focus();
        IdInput.current=isActive;
    }   
  }

  const pressEnterName = (e) => {
    if(e.key === "Enter" && nameInput.current) {      
        nameInput.current.blur();
    }
  }

  const changeRange = (e) => {
    Number(e.target.value) === 0 ? setIsEnabled(false) : setIsEnabled(true)
  }

  return (
    <tr key={uuid} className={classNames(s.item, isSelect && s.selected)} onClick={onSelect}>
      <td>
      <input
          className={classNames(s.range, !isEnabled && s.rangeOff)}
          type="range"
          min={0}
          max={100}
          step={100}
          onClick={changeRange}/>
      </td>
      <td>{product}</td>
      <td>
      <input
            type="text"
            ref={IdInput}
            name="id"
            maxLength={3}
            id={uuid}
            onChange={onChangeItem}
            disabled={isActive || !isEnabled}
            pattern="\d{3}"
            onKeyUp={pressEnter}
            className={classNames(s.input)}
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
            className={classNames(s.input)}
            disabled={!isEnabled}
          />
        </td>
      <td >
        <button className={s.button} onClick={onDelete}>X</button>
      </td>
    </tr>
  );
};

export default TableItem;
