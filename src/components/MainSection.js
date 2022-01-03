import { useRecoilState, useRecoilValue } from 'recoil';

import Footer from './Footer';
import TodoList from './TodoList';
import { completedTodosCount } from '../store/selectors';
import { todos } from '../store/atoms';

const MainSection = () => {
  const [todoList, setTodos] = useRecoilState(todos)
  const todosCompleted = useRecoilValue(completedTodosCount);

  const completeAll = (e) => {
    setTodos([...todoList.map((todo) => ({ ...todo, completed: e.target.checked }))]);
  }

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
