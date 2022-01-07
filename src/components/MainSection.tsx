import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Footer from './Footer';
import TodoList from './TodoList';
import { Todo, todos } from '../store/atoms';
import { completedTodosCount } from '../store/selectors';

const MainSection = () => {
  const [todoList, setTodos] = useRecoilState(todos);
  const todosCompleted = useRecoilValue(completedTodosCount);

  const completeAll = (e: any) => {
    setTodos([...todoList.map((todo: Todo) => ({ ...todo, completed: e.target.checked }))]);
  };

  return (
    <section className="main">
      {!!todoList.length && (
        <>
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            checked={todosCompleted === todoList.length}
            onChange={completeAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
      )}
      <TodoList />
      {!!todoList.length && <Footer />}
    </section>
  );
};

export default MainSection;
