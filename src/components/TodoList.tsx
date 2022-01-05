import React from "react";
import { useRecoilValue } from "recoil";

import TodoItem from "./TodoItem";
import { Todo } from "../store/atoms";
import { visibleTodos } from "../store/selectors";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  const todosVisible = useRecoilValue(visibleTodos);
  const { update, remove, toggle } = useTodos();

  return (
    <ul className="todo-list">
      {todosVisible.map((todo: Todo) => (
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
