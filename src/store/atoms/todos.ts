import { atom } from "recoil";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  created_at: Date;
}

export const todos = atom<Todo[]>({
  key: "todos",
  default: [],
});
