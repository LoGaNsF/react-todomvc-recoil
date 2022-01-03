import { useRecoilState } from "recoil";
import { todos } from "../store/atoms";

export function useTodos() {
  const [todoList, setTodos] = useRecoilState(todos);

  const create = (text) => {
    const newTodo = {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      text,
      completed: false,
      created_at: new Date(),
    };
    setTodos([...todoList, newTodo]);
  };

  const update = (id, text) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = replaceAtIndex(idx, { ...todo, text }, todoList);

    setTodos(newTodoList);
  };

  const remove = (id) => {
    setTodos([...todoList.filter((todo) => todo.id !== id)]);
  };

  const toggle = (id) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = replaceAtIndex(
      idx,
      { ...todo, completed: !todo.completed },
      todoList
    );

    setTodos(newTodoList);
  };

  return { create, update, remove, toggle };
}

function replaceAtIndex(idx, todo, todoList) {
  return [...todoList.slice(0, idx), todo, ...todoList.slice(idx + 1)];
}
