import classNames from "classnames";
import s from './Header.module.css';

const Header = ({ onCreate, onDelete,length }) => {
  return (
    <>
        <thead>
          <tr className={s.header}>
            <th >Status</th>
            <th >Product</th>
            <th >ID</th>
            <th >Name</th>
            <th>
              <button onClick={onCreate}>+</button>
            </th>
          </tr>
          <tr>
            <th><select disabled></select> </th>
            <th><select disabled></select></th>
            <th><select disabled></select></th>
            <th><select ></select></th>
            <th>
              <button className={classNames(length >0? s.visible:s.hidden)} onClick={onDelete}>-</button>
            </th>
          </tr>
        </thead>
    </>
  );
};
export default Header;
