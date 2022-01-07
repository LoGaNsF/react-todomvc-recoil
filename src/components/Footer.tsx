import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Link from './Link';
import { todos, visibilityFilter } from '../store/atoms';
import { completedTodosCount, activeTodosCount } from '../store/selectors';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../store/constants/FilterTypes';

const FILTER_TITLES: { [key: string]: string } = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

const Footer = () => {
  const activeCount = useRecoilValue(activeTodosCount);
  const completedCount = useRecoilValue(completedTodosCount);
  const [todosList, setTodos] = useRecoilState(todos);
  const [currentFilter, setVisibility] = useRecoilState(visibilityFilter);

  const onClearCompleted = () => {
    const newTodoList = [...todosList.filter((todo: any) => !todo.completed)];
    setTodos(newTodoList);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {activeCount > 1 ? ' items left' : ' item left'}
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <Link active={currentFilter === filter} setFilter={() => setVisibility(filter)}>
              {FILTER_TITLES[filter]}
            </Link>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button type="button" className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
