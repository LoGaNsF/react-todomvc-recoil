import React, { FC, useState } from 'react';
import classnames from 'classnames';

import { Todo } from '../store/atoms';

interface TodoProps {
  data: Todo;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: FC<TodoProps> = ({ data, editTodo, deleteTodo, toggleTodo }) => {
  const { id, text, completed } = data;
  const [editText, setEditText] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleChange = (e: any) => setEditText(e.target.value);

  const handleBlur = () => {
    editTodo(id, editText);
    setEditing(false);
  };

  return (
    <li className={classnames({ completed, editing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <label htmlFor="toggle" onDoubleClick={() => setEditing(true)}>
          {text}
        </label>
        <button
          type="button"
          aria-label="Delete"
          className="destroy"
          onClick={() => deleteTodo(id)}
        />
      </div>
      {editing && (
        <input
          className="edit"
          value={editText}
          onInput={handleChange}
          onBlur={handleBlur}
          onChange={() => {}}
        />
      )}
    </li>
  );
};

export default TodoItem;
