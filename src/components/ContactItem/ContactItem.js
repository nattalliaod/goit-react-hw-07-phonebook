import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
import PropTypes from 'prop-types';
import Spinner from '../Loader';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}: </p>
      <a href={`tel:${phone}`} className={styles.number}>
        {phone}
      </a>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner width={10} height={10} /> : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
