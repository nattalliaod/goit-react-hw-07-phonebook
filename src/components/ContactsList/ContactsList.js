import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';
import { getFilter } from '../../redux/filter/filter-selectors';
import ContactItem from '../ContactItem';
import Spinner from '../Loader';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  console.log(data);
  console.log(useFetchContactsQuery());
  // const [deleteContact] = useDeleteContactMutation();
  const normalizedFilter = useSelector(getFilter);

  return (
    <>
      {isFetching && <Spinner />}
      <ul className={styles.list}>
        {data &&
          data
            .filter(el =>
              el.name.toUpperCase().includes(normalizedFilter.toUpperCase()),
            )
            .map(contact => (
              // <li className={styles.item} key={id}>
              //   <ContactItem
              //     id={id}
              //     name={name}
              //     phone={phone}
              //     onDeleteContact={deleteContact}
              //   />
              // </li>
              <ContactItem key={contact.id} {...contact} />
            ))}
      </ul>
    </>
  );
};

export default ContactsList;

// import React, { Component } from 'react'

// export class ContactsList extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }    rce
