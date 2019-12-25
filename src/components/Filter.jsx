import React from 'react';

export default function Filter({ filter, filterChange }) {
  const handleChange = ({ target }) => filterChange(target.value);

  return (
    <div>
      <span>Find contacts by name</span>
      <br />
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
