import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { todos } from '../store/atoms';

const Header = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodos] = useRecoilState(todos)

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const newTodo = {
        id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        text: event.target.value,
        completed: false,
        created_at: new Date()
      };
      setTodos([...todoList, newTodo]);
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
