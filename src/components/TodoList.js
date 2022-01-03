import { useRecoilState, useRecoilValue } from 'recoil';

import TodoItem from './TodoItem';
import { visibleTodos } from '../store/selectors';
import { todos } from '../store/atoms';

const TodoList = () => {
  const todosVisible = useRecoilValue(visibleTodos);
  const [todoList, setTodos] = useRecoilState(todos);

  const update = (id, text) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = [
      ...todoList.slice(0, idx),
      { ...todo, text },
      ...todoList.slice(idx + 1)
    ];

    setTodos(newTodoList);
  };

  const remove = (id) => {
    setTodos([...todoList.filter((todo) => todo.id !== id)]);
  };

  const toggle = (id) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = [
      ...todoList.slice(0, idx),
      { ...todo, completed: !todo.completed },
      ...todoList.slice(idx + 1)
    ];

    setTodos(newTodoList);
  };

  return (
    <ul className="todo-list">
      {todosVisible.map((todo) => (
        <TodoItem
          key={todo.id}
          data={todo}
          editTodo={update}
          deleteTodo={remove}
          toggleTodo={toggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
