import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

const Header = () => {
  const [value, setValue] = useState('');
  const { create } = useTodos();

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      create(event.target.value);
      setValue('');
    }
  };

  return (
    <header>
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        value={value}
      />
    </header>
  );
};

export default Header;
