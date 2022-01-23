import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filter/filter-actions';
import { getFilter } from '../../redux/filter/filter-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  // const onChange = event => dispatch(filterContact(event.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.input}
        value={value}
        onChange={event => dispatch(filterContact(event.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export default Filter;
