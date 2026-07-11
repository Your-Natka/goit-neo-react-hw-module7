import css from './App.module.css';

import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading, selectError } from '../../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.title}>📒 Phonebook</h1>

      {loading && <p>Loading contacts...</p>}

      {error && <p>Error: {error}</p>}

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
}
