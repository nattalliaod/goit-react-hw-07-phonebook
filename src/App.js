import Container from './components/Container';
import ContactsForm from './components/ContactsForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import s from './App.module.css';

const App = () => {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
