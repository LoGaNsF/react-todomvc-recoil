import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TodoItem = ({ data, editTodo, deleteTodo, toggleTodo }) => {
  const { id, text, completed } = data;
  const [editText, setEditText] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => setEditText(e.target.value);

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

TodoItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created_at: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoItem;
