import { useRecoilState } from "recoil";

import { Todo, todos } from "../store/atoms";

interface UseTodosHook {
  create: (text: string) => void;
  update: (id: string, text: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}

export const useTodos = (): UseTodosHook => {
  const [todoList, setTodos] = useRecoilState(todos);

  const create = (text: string) => {
    const newTodo = {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      text,
      completed: false,
      created_at: new Date(),
    };
    setTodos([...todoList, newTodo]);
  };

  const update = (id: string, text: string) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = replaceElementAtIndex(idx, { ...todo, text } as Todo, todoList);

    setTodos(newTodoList);
  };

  const remove = (id: string) => {
    setTodos([...todoList.filter((todo) => todo.id !== id)]);
  };

  const toggle = (id: string) => {
    const idx = todoList.findIndex((todo) => todo.id === id);
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoList = replaceElementAtIndex(
      idx,
      { ...todo, completed: !todo?.completed } as Todo,
      todoList
    );

    setTodos(newTodoList);
  };

  return { create, update, remove, toggle };
};

/**
 * Replace current TODO with the new
 * @param idx index o previous TODO
 * @param todo new todo to add
 * @param todoList list of TODOs
 * @returns new list of TODOs
 */
function replaceElementAtIndex(idx: number, todo: Todo, todoList: Todo[]): Todo[] {
  return [...todoList.slice(0, idx), todo, ...todoList.slice(idx + 1)];
}
