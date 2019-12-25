import React, { useState, useEffect, useMemo, useReducer } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import storage from '../helpers/localStorage';
import reducer from '../helpers/contactsReduser';
import generateId from '../helpers/generateId';

export default function App() {
  const [contacts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const contacts = storage.get('contacts');
    if (contacts)
      dispatch({ type: 'addContactsFromStorage', payload: { contacts } });
  }, []);

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const isContact = name =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const addContact = (name, number) => {
    if (isContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch({
      type: 'addContact',
      payload: {
        contact: { id: generateId(), name, number },
      },
    });
  };

  const deleteContact = contactId =>
    dispatch({ type: 'deleteContact', payload: { contactId } });

  const [filter, setFilter] = useState('');

  const filterChange = value => setFilter(value);

  const filtredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [contacts, filter],
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h1>Contacts</h1>
      <Filter filter={filter} filterChange={filterChange} />
      <ContactList contacts={filtredContacts} deleteContact={deleteContact} />
    </div>
  );
}
