import delImg from '../../img/del.svg';
import addImg from '../../img/add.svg';
import classNames from 'classnames';
import s from './Header.module.css';

const Header = ({ onCreate, onDelete, length }) => {
  return (
    <>
      <thead>
        <tr>
          <th>Статус</th>
          <th>Товар</th>
          <th>ID</th>
          <th>Название</th>
          <th>
            <button onClick={onCreate}>
              <img src={addImg} alt='' />
            </button>
          </th>
        </tr>
        <tr>
          <th>
            <select className={s.select} disabled></select>{' '}
          </th>
          <th>
            <select className={s.select} disabled></select>
          </th>
          <th>
            <select className={s.select} disabled></select>
          </th>
          <th>
            <select className={s.select}></select>
          </th>
          <th>
            <button
              className={classNames(length > 0 ? s.visible : s.hidden)}
              onClick={onDelete}
            >
              <img src={delImg} alt='' />
            </button>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default Header;
