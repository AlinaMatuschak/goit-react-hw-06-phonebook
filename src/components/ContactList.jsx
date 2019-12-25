import React from 'react';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button onClick={() => deleteContact(id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
