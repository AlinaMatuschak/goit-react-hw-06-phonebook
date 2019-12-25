export default function ContactsReducer(state, { type, payload }) {
  switch (type) {
    case 'addContact':
      return [...state, payload.contact];

    case 'deleteContact':
      return state.filter(contact => contact.id !== payload.contactId);

    case 'addContactsFromStorage':
      return [...payload.contacts];

    default:
      return state;
  }
}
