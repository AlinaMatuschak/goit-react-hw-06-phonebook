import React, { useState } from 'react';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');

  const updateName = ({ target }) => {
    setName(target.value);
  };

  const [number, setNumber] = useState('');

  const updateNumber = ({ target }) => {
    setNumber(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!name || !number) {
      alert('fill in all the necessary fields');
      return;
    }

    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <br />
        <input type="name" name="name" onChange={updateName} value={name} />
      </label>

      <br />

      <label>
        <span>Number</span>
        <br />
        <input type="tel" name="tel" onChange={updateNumber} value={number} />
      </label>

      <br />

      <button type="submit">Add contact</button>
    </form>
  );
}
