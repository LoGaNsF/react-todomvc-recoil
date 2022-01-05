import { selector } from "recoil";

import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from "../constants/FilterTypes";
import { Todo, todos, visibilityFilter } from "../atoms";

export const visibleTodos = selector<Todo[]>({
  key: "visibleTodos",
  get: ({ get }) => {
    const todosList = get(todos);
    const filter = get(visibilityFilter);

    switch (filter) {
      case SHOW_ALL:
        return todosList;
      case SHOW_COMPLETED:
        return todosList.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return todosList.filter((t) => !t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  },
});

export const activeTodosCount = selector<number>({
  key: "activeTodosCount",
  get: ({ get }) => {
    const todosList = get(todos);
    return todosList.reduce(
      (count, todo) => (!todo.completed ? count + 1 : count),
      0
    );
  },
});

export const completedTodosCount = selector<number>({
  key: "completedTodosCount",
  get: ({ get }) => {
    const todosList = get(todos);
    return todosList.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );
  },
});

export const areAllTodosCompleted = selector<boolean>({
  key: "areAllTodosCompleted",
  get: ({ get }) => {
    const todosList = get(todos);
    return !!todosList.length && todosList.every((todo) => todo.completed);
  },
});
