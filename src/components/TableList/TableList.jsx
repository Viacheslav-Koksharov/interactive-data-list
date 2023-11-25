import React, { useState } from 'react';
import Header from '../Header';
import TableItem from '../TableItem';
import s from './TableList.module.css';

const TableList = () => {
  const [itemsList, setItemsList] = useState([]);

  const addItem = () => {
    const item = {
      uuid: Date.now(),
      product: 'xxxx-',
      id: '',
      name: '',
      isSelect: false,
      isActive:false
    };
    setItemsList(prevState => [item, ...prevState]);
 
  };

  const changeItem = e => {
    if (!(e.target.value).match('^(0|[1-9][0-9]*)$')) {
      e.preventDefault();
    }

    const { id, name, value } = e.target;
    itemsList.forEach(item => {
         if (item.uuid === Number(id)) {
          switch (name) {
            case 'id':
              item.id = value
              item.isActive=true
              break;
            case 'name':
              item.name = value
              break;
            default:
              break;
          }
        return item
      }
    })
  };
  
  const setSelect = (id) =>
  setItemsList(itemsList.filter((item) => {
        if (item.id === id) {
          item.isSelect= !item.isSelect
        };
        return item;
      })
  );

const selectedItemlength= itemsList.reduce((selected, item) => selected + item.isSelect, 0);

const deleteItem = id => {
    setItemsList(itemsList.filter(item => item.id !== id));
  };

  const deleteSelectedItem = () => {
    if (window.confirm('Are you sure?')) {
      setItemsList(itemsList.filter((item) => !item.isSelect));
    } 
  };
console.log(itemsList)
  return (
    <>
      <table className={s.table}>
        <Header onCreate={addItem} onDelete={deleteSelectedItem} length={selectedItemlength}/>
        {itemsList?.map(({ id, isActive,isSelect,name, product, uuid }) => (
          <TableItem
            key={uuid}
            product={product}
            uuid={uuid}
            name={name}
            isActive={isActive}
            isSelect={isSelect}
            onSelect={() => setSelect(id)}
            onChangeItem={e => changeItem(e)}
            onDelete={() => deleteItem(id)}

          />
        ))}
        {!itemsList.length && <div>This list is empty</div>}
      </table>
    </>
  );
};

export default TableList;
